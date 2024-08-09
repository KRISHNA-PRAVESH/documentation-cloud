#  Class AppEnvironment

Namespace: [CloudCommon.Environment.Impl](CloudCommon.Environment.Impl.md)  
Assembly: CloudCommon.dll  

```csharp
public class AppEnvironment : IAppEnvironment, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppEnvironment](CloudCommon.Environment.Impl.AppEnvironment.md)

#### Implements

[IAppEnvironment](CloudCommon.Environment.IAppEnvironment.md), 
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
[GenericExtension.CloneByJson<AppEnvironment\>\(AppEnvironment\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<AppEnvironment, U\>\(AppEnvironment, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<AppEnvironment\>\(AppEnvironment\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<AppEnvironment\>\(AppEnvironment, params AppEnvironment\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<AppEnvironment\>\(AppEnvironment\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<AppEnvironment\>\(AppEnvironment, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Constructors

###  AppEnvironment\(\)

```csharp
public AppEnvironment()
```

## Properties

###  AllowedIps

```csharp
public string AllowedIps { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  AppBaseUrl

```csharp
public string AppBaseUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  AppGivenName

```csharp
public string AppGivenName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  AppId

```csharp
public string AppId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  AppName

```csharp
public string AppName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  AppVersion

```csharp
public string AppVersion { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  AuthResponseUrl

```csharp
public string AuthResponseUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  DirectoryServerUrl

```csharp
public string DirectoryServerUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GlobalAppId

```csharp
public string GlobalAppId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  OAuthFlowRequired

```csharp
public string OAuthFlowRequired { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  PersistentDllName

```csharp
public string PersistentDllName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  Persistor

```csharp
public bool Persistor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  SchemaUrl

```csharp
public string SchemaUrl { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

###  Dispose\(bool\)

```csharp
protected virtual void Dispose(bool isDisposing)
```

#### Parameters

`isDisposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

###  \~AppEnvironment\(\)

```csharp
protected ~AppEnvironment()
```

