#  Class ApiResponse

Namespace: [CloudCommon.Utils](CloudCommon.Utils.md)  
Assembly: CloudCommon.dll  

```csharp
public class ApiResponse : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ApiResponse](CloudCommon.Utils.ApiResponse.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[GenericExtension.As<T\>\(object\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_As\_\_1\_System\_Object\_), 
[AssemblyUtil.ChangeType<T\>\(object\)](CloudCommon.Utils.AssemblyUtil.md\#CloudCommon\_Utils\_AssemblyUtil\_ChangeType\_\_1\_System\_Object\_), 
[GenericExtension.CloneByJson<ApiResponse\>\(ApiResponse\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<ApiResponse, U\>\(ApiResponse, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<ApiResponse\>\(ApiResponse\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<ApiResponse\>\(ApiResponse, params ApiResponse\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<ApiResponse\>\(ApiResponse\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<ApiResponse\>\(ApiResponse, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Properties

###  Data

```csharp
public object Data { get; set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  Message

```csharp
public string Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  StatusCode

```csharp
public ApiResponseEnum StatusCode { get; set; }
```

#### Property Value

 [ApiResponseEnum](CloudCommon.Enums.ApiResponseEnum.md)

## Methods

###  CreateSuccessApiResponse\(object\)

```csharp
public static ApiResponse CreateSuccessApiResponse(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [ApiResponse](CloudCommon.Utils.ApiResponse.md)

###  CreateSuccessResponse\(object\)

```csharp
public static ApiResponse CreateSuccessResponse(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [ApiResponse](CloudCommon.Utils.ApiResponse.md)

###  CreateSuccessResponseAsObject\(object\)

```csharp
public static Tuple<ApiResponse, object> CreateSuccessResponseAsObject(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[ApiResponse](CloudCommon.Utils.ApiResponse.md), [object](https://learn.microsoft.com/dotnet/api/system.object)\>

###  CreateSuccessResponseForByte\(byte\[\]\)

```csharp
public static ApiResponse CreateSuccessResponseForByte(byte[] data)
```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [ApiResponse](CloudCommon.Utils.ApiResponse.md)

### replaced Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### replaced Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### replaced Error\(string\)

```csharp
public static ApiResponse Error(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ApiResponse](CloudCommon.Utils.ApiResponse.md)

### replaced \~ApiResponse\(\)

```csharp
protected ~ApiResponse()
```

### replaced ParamsMissingOrBadRequest\(string\)

```csharp
public static ApiResponse ParamsMissingOrBadRequest(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ApiResponse](CloudCommon.Utils.ApiResponse.md)

### replaced Success\(object, string\)

```csharp
public static ApiResponse Success(object data, string message)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ApiResponse](CloudCommon.Utils.ApiResponse.md)

### replaced UnAuthorizedRequest\(string\)

```csharp
public static ApiResponse UnAuthorizedRequest(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ApiResponse](CloudCommon.Utils.ApiResponse.md)

