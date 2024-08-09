#  Class TenantConfigurationInstance

Namespace: [CloudManager.Models](CloudManager.Models.md)  
Assembly: CloudManager.dll  

contains tenant database configurations and the global tenant id

```csharp
[Serializable]
public class TenantConfigurationInstance
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantConfigurationInstance](CloudManager.Models.TenantConfigurationInstance.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

###  Configuration

NHibernate configuration string

```csharp
public Configuration Configuration { get; set; }
```

#### Property Value

 Configuration

###  IsSchemaExists

```csharp
public bool IsSchemaExists { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  TenantIdentifier

used as argument for current logged in tenant

```csharp
public string TenantIdentifier { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

