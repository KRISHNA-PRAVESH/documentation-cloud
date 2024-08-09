#  Class InternalFlurlExtension

Namespace: [CloudCommon.Http.FlurlClient](CloudCommon.Http.FlurlClient.md)  
Assembly: CloudCommon.dll  

```csharp
public static class InternalFlurlExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InternalFlurlExtension](CloudCommon.Http.FlurlClient.InternalFlurlExtension.md)

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
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_)

## Methods

###  AppendDefaultHeaders\(IFlurlRequest\)

used for append default headers in the Flurl.Url

```csharp
public static IFlurlRequest AppendDefaultHeaders(this IFlurlRequest url)
```

#### Parameters

`url` IFlurlRequest

#### Returns

 IFlurlRequest

###  AppendOAuthHeader\(IFlurlRequest\)

used for append OAuth access token fetched from the current delegation model

```csharp
public static IFlurlRequest AppendOAuthHeader(this IFlurlRequest url)
```

#### Parameters

`url` IFlurlRequest

#### Returns

 IFlurlRequest

###  ComputeResponseAsync<T\>\(IFlurlResponse, bool\)

used to process the cpm response as Tuple data

```csharp
public static Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> ComputeResponseAsync<T>(this IFlurlResponse flurlResponse, bool verifySignatureAlso = false)
```

#### Parameters

`flurlResponse` IFlurlResponse

`verifySignatureAlso` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<[ApiResponse](CloudCommon.Utils.ApiResponse.md), UnAuthorizedAccessError, InternalServerError\>\>

#### Type Parameters

`T` 

###  GetAndReturnResponse<T\>\(IFlurlRequest\)

used to get data and compute it's return result as one of object

```csharp
public static Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> GetAndReturnResponse<T>(this IFlurlRequest url)
```

#### Parameters

`url` IFlurlRequest

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<[ApiResponse](CloudCommon.Utils.ApiResponse.md), UnAuthorizedAccessError, InternalServerError\>\>

#### Type Parameters

`T` 

###  GetSignature\(IFlurlResponse\)

used to fetch signature header named as "content-signature"

```csharp
public static string GetSignature(this IFlurlResponse flurlResponse)
```

#### Parameters

`flurlResponse` IFlurlResponse

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  PostAsByteArrayContentAndReturnResponse<T\>\(IFlurlRequest, object\)

used to post data as byte array and compute it's return result as one of object

```csharp
public static Task<OneOf<ApiResponse, UnAuthorizedAccessError, InternalServerError>> PostAsByteArrayContentAndReturnResponse<T>(this IFlurlRequest url, object data)
```

#### Parameters

`url` IFlurlRequest

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<OneOf<[ApiResponse](CloudCommon.Utils.ApiResponse.md), UnAuthorizedAccessError, InternalServerError\>\>

#### Type Parameters

`T` 

###  PosyAsByteArrayContent\(IFlurlRequest, object\)

used for post data as byte array content

```csharp
public static Task<IFlurlResponse> PosyAsByteArrayContent(this IFlurlRequest flurlRequest, object data)
```

#### Parameters

`flurlRequest` IFlurlRequest

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<IFlurlResponse\>

###  VerifySignature\(IFlurlResponse, object\)

used to verify the signature matches the current object

```csharp
public static bool VerifySignature(this IFlurlResponse flurlResponse, object data)
```

#### Parameters

`flurlResponse` IFlurlResponse

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  WaitAndGetResult<T\>\(Task<T\>\)

used for return result form the task

```csharp
public static T WaitAndGetResult<T>(this Task<T> task)
```

#### Parameters

`task` [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<T\>

#### Returns

 T

#### Type Parameters

`T` 

