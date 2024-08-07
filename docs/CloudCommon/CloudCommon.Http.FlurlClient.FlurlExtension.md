#  Class FlurlExtension

Namespace: [CloudCommon.Http.FlurlClient](CloudCommon.Http.FlurlClient.md)  
Assembly: CloudCommon.dll  

used for get flurl http extension

```csharp
public static class FlurlExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FlurlExtension](CloudCommon.Http.FlurlClient.FlurlExtension.md)

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

### replaced AppendHeaders\(IFlurlRequest, Dictionary<string, object\>\)

used for appending headers with key value pair

```csharp
public static IFlurlRequest AppendHeaders(this IFlurlRequest url, Dictionary<string, object> header)
```

#### Parameters

`url` IFlurlRequest

`header` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)\>

#### Returns

 IFlurlRequest

### replaced AppendListOfPathSegments\(Url, List<string\>\)

used to append path segments in the flurl url

```csharp
public static Url AppendListOfPathSegments(this Url url, List<string> segments)
```

#### Parameters

`url` Url

`segments` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 Url

### replaced AppendQueryParams\(Url, Dictionary<string, object\>\)

used for appending query params with key value pair

```csharp
public static Url AppendQueryParams(this Url url, Dictionary<string, object> queryParams)
```

#### Parameters

`url` Url

`queryParams` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)\>

#### Returns

 Url

### replaced AppendQueryParamsAndPathSegmentsFromUrlSegmentsRecord\(Url, UrlSegments, params object\[\]\)

used to appending query params and path segments from the url segments itself

```csharp
public static Url AppendQueryParamsAndPathSegmentsFromUrlSegmentsRecord(this Url url, UrlSegments urlSegments, params object[] objects)
```

#### Parameters

`url` Url

`urlSegments` [UrlSegments](CloudCommon.Http.UrlSegments.md)

`objects` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 Url

### replaced GetClientFlurlUrl\(\)

used for fetch flurl url with path segment api/client

```csharp
public static Url GetClientFlurlUrl()
```

#### Returns

 Url

### replaced GetCpmFlurlUrl\(\)

used for fetch flurl url without path segments

```csharp
public static Url GetCpmFlurlUrl()
```

#### Returns

 Url

### replaced GetDirectoryClientFlurlUrl\(\)

used for fetch flurl url without path segments

```csharp
public static Url GetDirectoryClientFlurlUrl()
```

#### Returns

 Url

### replaced GetDirectoryServicesFlurlUrl\(\)

used for fetch flurl url with path segment api/directory

```csharp
public static Url GetDirectoryServicesFlurlUrl()
```

#### Returns

 Url

### replaced GetDirectoryUserControlFlurlUrl\(\)

```csharp
public static Url GetDirectoryUserControlFlurlUrl()
```

#### Returns

 Url

### replaced GetPersistentFlurlUrl\(\)

used for fetch flurl url with path segment api/persistent

```csharp
public static Url GetPersistentFlurlUrl()
```

#### Returns

 Url

