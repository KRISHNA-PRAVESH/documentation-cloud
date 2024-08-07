#  Class ServicesUtil

Namespace: [CloudCommon.Utils](CloudCommon.Utils.md)  
Assembly: CloudCommon.dll  

used for separating service properties

```csharp
public static class ServicesUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServicesUtil](CloudCommon.Utils.ServicesUtil.md)

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

###  ExtractSchemes\(IServiceCollection\)

will extract the dependecies

```csharp
public static IServiceCollection ExtractSchemes(this IServiceCollection serviceCollection)
```

#### Parameters

`serviceCollection` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

###  GetAuthCookieName\(\)

returns enabled auth cookie name

```csharp
public static string GetAuthCookieName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetAuthenticationSchemes\(\)

it will returns enabled authentication schemes

```csharp
public static IEnumerable<AuthenticationScheme> GetAuthenticationSchemes()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[AuthenticationScheme](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.authentication.authenticationscheme)\>

###  SetAuthCookieName\(string\)

sets the auth cookie name called from authentication extension don't set it after application initialized

```csharp
public static void SetAuthCookieName(string cookieName)
```

#### Parameters

`cookieName` [string](https://learn.microsoft.com/dotnet/api/system.string)

