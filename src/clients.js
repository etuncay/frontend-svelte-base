"use strict";
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.9.0 (NJsonSchema v10.4.1.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = exports.ClientName = void 0;
var axios_1 = require("axios");
var ClientName = /** @class */ (function () {
    function ClientName(baseUrl, instance) {
        this.jsonParseReviver = undefined;
        this.instance = instance ? instance : axios_1.default.create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }
    /**
     * @param body (optional)
     * @return Success
     */
    ClientName.prototype.login = function (body, cancelToken) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Auth/Login";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken: cancelToken
        };
        return this.instance.request(options_).catch(function (_error) {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            }
            else {
                throw _error;
            }
        }).then(function (_response) {
            return _this.processLogin(_response);
        });
    };
    ClientName.prototype.processLogin = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (var k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            var _responseText = response.data;
            var result200 = null;
            var resultData200 = _responseText;
            result200 = JSON.parse(resultData200);
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    };
    /**
     * @param body (optional)
     * @return Success
     */
    ClientName.prototype.register = function (body, cancelToken) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Auth/Register";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(body);
        var options_ = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken: cancelToken
        };
        return this.instance.request(options_).catch(function (_error) {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            }
            else {
                throw _error;
            }
        }).then(function (_response) {
            return _this.processRegister(_response);
        });
    };
    ClientName.prototype.processRegister = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (var k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            var _responseText = response.data;
            var result200 = null;
            var resultData200 = _responseText;
            result200 = JSON.parse(resultData200);
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    };
    /**
     * @return Success
     */
    ClientName.prototype.getList = function (cancelToken) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Person/GetList";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "text/plain"
            },
            cancelToken: cancelToken
        };
        return this.instance.request(options_).catch(function (_error) {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            }
            else {
                throw _error;
            }
        }).then(function (_response) {
            return _this.processGetList(_response);
        });
    };
    ClientName.prototype.processGetList = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (var k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            var _responseText = response.data;
            var result200 = null;
            var resultData200 = _responseText;
            result200 = JSON.parse(resultData200);
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    };
    /**
     * @return Success
     */
    ClientName.prototype.get = function (cancelToken) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Person/Get";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "text/plain"
            },
            cancelToken: cancelToken
        };
        return this.instance.request(options_).catch(function (_error) {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            }
            else {
                throw _error;
            }
        }).then(function (_response) {
            return _this.processGet(_response);
        });
    };
    ClientName.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && typeof response.headers === "object") {
            for (var k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            var _responseText = response.data;
            var result200 = null;
            var resultData200 = _responseText;
            result200 = JSON.parse(resultData200);
            return result200;
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve(null);
    };
    return ClientName;
}());
exports.ClientName = ClientName;
var ApiException = /** @class */ (function (_super) {
    __extends(ApiException, _super);
    function ApiException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isApiException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    ApiException.isApiException = function (obj) {
        return obj.isApiException === true;
    };
    return ApiException;
}(Error));
exports.ApiException = ApiException;
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}
function isAxiosError(obj) {
    return obj && obj.isAxiosError === true;
}
