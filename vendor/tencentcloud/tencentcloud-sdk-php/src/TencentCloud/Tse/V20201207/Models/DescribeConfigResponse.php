<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Tse\V20201207\Models;
use TencentCloud\Common\AbstractModel;

/**
 * DescribeConfig返回参数结构体
 *
 * @method string getKey() 获取配置项或路径key
 * @method void setKey(string $Key) 设置配置项或路径key
 * @method string getValue() 获取配置项的值
 * @method void setValue(string $Value) 设置配置项的值
 * @method boolean getIsDir() 获取当前key是否为路径
 * @method void setIsDir(boolean $IsDir) 设置当前key是否为路径
 * @method array getList() 获取当前key下的子路径
 * @method void setList(array $List) 设置当前key下的子路径
 * @method string getRequestId() 获取唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
 * @method void setRequestId(string $RequestId) 设置唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
 */
class DescribeConfigResponse extends AbstractModel
{
    /**
     * @var string 配置项或路径key
     */
    public $Key;

    /**
     * @var string 配置项的值
     */
    public $Value;

    /**
     * @var boolean 当前key是否为路径
     */
    public $IsDir;

    /**
     * @var array 当前key下的子路径
     */
    public $List;

    /**
     * @var string 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    public $RequestId;

    /**
     * @param string $Key 配置项或路径key
     * @param string $Value 配置项的值
     * @param boolean $IsDir 当前key是否为路径
     * @param array $List 当前key下的子路径
     * @param string $RequestId 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("Key",$param) and $param["Key"] !== null) {
            $this->Key = $param["Key"];
        }

        if (array_key_exists("Value",$param) and $param["Value"] !== null) {
            $this->Value = $param["Value"];
        }

        if (array_key_exists("IsDir",$param) and $param["IsDir"] !== null) {
            $this->IsDir = $param["IsDir"];
        }

        if (array_key_exists("List",$param) and $param["List"] !== null) {
            $this->List = $param["List"];
        }

        if (array_key_exists("RequestId",$param) and $param["RequestId"] !== null) {
            $this->RequestId = $param["RequestId"];
        }
    }
}
