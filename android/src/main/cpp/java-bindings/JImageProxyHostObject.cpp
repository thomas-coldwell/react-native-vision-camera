//
// Created by Marc on 19/06/2021.
//

#include "JImageProxyHostObject.h"
#include <android/log.h>
#include <vector>
#include <string>

#include "jsi/TypedArray.h"

namespace vision {

std::vector<jsi::PropNameID> JImageProxyHostObject::getPropertyNames(jsi::Runtime& rt) {
  std::vector<jsi::PropNameID> result;
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("toString")));
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("isValid")));
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("width")));
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("height")));
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("bytesPerRow")));
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("planesCount")));
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("close")));
  result.push_back(jsi::PropNameID::forUtf8(rt, std::string("planes")));
  return result;
}

jsi::Value JImageProxyHostObject::get(jsi::Runtime& runtime, const jsi::PropNameID& propNameId) {
  auto name = propNameId.utf8(runtime);

  if (name == "toString") {
    auto toString = [this] (jsi::Runtime& runtime, const jsi::Value&, const jsi::Value*, size_t) -> jsi::Value {
      if (!this->frame) {
        return jsi::String::createFromUtf8(runtime, "[closed frame]");
      }
      auto width = this->frame->getWidth();
      auto height = this->frame->getHeight();
      auto str = std::to_string(width) + " x " + std::to_string(height) + " Frame";
      return jsi::String::createFromUtf8(runtime, str);
    };
    return jsi::Function::createFromHostFunction(runtime, jsi::PropNameID::forUtf8(runtime, "toString"), 0, toString);
  }
  if (name == "close") {
    auto close = [this] (jsi::Runtime& runtime, const jsi::Value&, const jsi::Value*, size_t) -> jsi::Value {
      if (!this->frame) {
        throw jsi::JSError(runtime, "Trying to close an already closed frame! Did you call frame.close() twice?");
      }
      this->close();
      return jsi::Value::undefined();
    };
    return jsi::Function::createFromHostFunction(runtime, jsi::PropNameID::forUtf8(runtime, "close"), 0, close);
  }

  if (name == "isValid") {
    return jsi::Value(this->frame && this->frame->getIsValid());
  }
  if (name == "width") {
    this->assertIsFrameStrong(runtime, name);
    return jsi::Value(this->frame->getWidth());
  }
  if (name == "height") {
    this->assertIsFrameStrong(runtime, name);
    return jsi::Value(this->frame->getHeight());
  }
  if (name == "bytesPerRow") {
    this->assertIsFrameStrong(runtime, name);
    return jsi::Value(this->frame->getBytesPerRow());
  }
  if (name == "planesCount") {
    this->assertIsFrameStrong(runtime, name);
    return jsi::Value(this->frame->getPlaneCount());
  }
  if (name == "planes") {
    this->assertIsFrameStrong(runtime, name);

    // TODO: Cache planes value to avoid building this multiple times
    auto planesCount = this->frame->getPlaneCount();
    auto planes = jsi::Array(runtime, (size_t) planesCount);

    for (size_t i = 0; i < planesCount; i++) {
      auto plane = jsi::Object(runtime);

      // TODO: GET ACTUAL BUFFER OF PLANE
      uint8_t* buffer = nullptr;
      auto size = 0;

      auto start = buffer;
      auto end = start + (size * sizeof(uint8_t));
      std::vector<uint8_t> vector(start, end);

      auto array = TypedArray<TypedArrayKind::Uint8Array>(runtime, vector);
      plane.setProperty(runtime, "pixels", array);
      planes.setValueAtIndex(runtime, i, plane);
    }

    return planes;
  }

  return jsi::Value::undefined();
}

void JImageProxyHostObject::assertIsFrameStrong(jsi::Runtime& runtime, const std::string& accessedPropName) const {
  if (!this->frame) {
    auto message = "Cannot get `" + accessedPropName + "`, frame is already closed!";
    throw jsi::JSError(runtime, message.c_str());
  }
}


JImageProxyHostObject::~JImageProxyHostObject() {
  this->close();
}

void JImageProxyHostObject::close() {
  if (this->frame) {
    this->frame->close();
    this->frame.release();
  }
}

} // namespace vision