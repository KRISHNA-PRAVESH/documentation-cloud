#  Class ServerResponse<T\>

Namespace: [CloudCommon.Http](CloudCommon.Http.md)  
Assembly: CloudCommon.dll  

used to for evaluating response from the server it's may contain error messages

```csharp
[MessagePackObject(false)]
public class ServerResponse<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerResponse<T\>](CloudCommon.Http.ServerResponse\-1.md)

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
[GenericExtension.CloneByJson<ServerResponse<T\>\>\(ServerResponse<T\>\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<ServerResponse<T\>, U\>\(ServerResponse<T\>, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<ServerResponse<T\>\>\(ServerResponse<T\>\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<ServerResponse<T\>\>\(ServerResponse<T\>, params ServerResponse<T\>\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<ServerResponse<T\>\>\(ServerResponse<T\>\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<ServerResponse<T\>\>\(ServerResponse<T\>, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Constructors

### replaced ServerResponse\(\)

new server response initializers

```csharp
public ServerResponse()
```

### replaced ServerResponse\(T, string, HttpStatusCode\)

new server response initializers with argument

```csharp
public ServerResponse(T data, string message, HttpStatusCode httpStatusCode)
```

#### Parameters

`data` T

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`httpStatusCode` [HttpStatusCode](https://learn.microsoft.com/dotnet/api/system.net.httpstatuscode)

### replaced ServerResponse\(string, HttpStatusCode\)

new server response initializers with argument

```csharp
public ServerResponse(string message, HttpStatusCode httpStatusCode)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`httpStatusCode` [HttpStatusCode](https://learn.microsoft.com/dotnet/api/system.net.httpstatuscode)

## Properties

### replaced Data

response data

```csharp
[Key(2)]
public T? Data { get; set; }
```

#### Property Value

 T?

### replaced HttpStatusCode

http response status code

```csharp
[Key(0)]
public HttpStatusCode? HttpStatusCode { get; set; }
```

#### Property Value

 [HttpStatusCode](https://learn.microsoft.com/dotnet/api/system.net.httpstatuscode)?

### replaced Message

if there's error in server it will be displayed in message

```csharp
[Key(1)]
public string? Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### replaced CreateErrorResponse\(Exception\)

used to fetch new server response as internal server error

```csharp
public static object CreateErrorResponse(Exception ex)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### replaced CreateErrorResponseAsByte\(Exception\)

used to fetch new server response as internal server error

```csharp
public static byte[] CreateErrorResponseAsByte(Exception ex)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

## Operators

### replaced implicit operator byte\[\]\(ServerResponse<T\>\)

used to convert server response as byte

```csharp
public static implicit operator byte[](ServerResponse<T> serverResponse)
```

#### Parameters

`serverResponse` [ServerResponse](CloudCommon.Http.ServerResponse\-1.md)<T\>

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

