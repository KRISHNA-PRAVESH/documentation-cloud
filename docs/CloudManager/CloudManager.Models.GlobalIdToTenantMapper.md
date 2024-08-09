#  Class GlobalIdToTenantMapper

Namespace: [CloudManager.Models](CloudManager.Models.md)  
Assembly: CloudManager.dll  

```csharp
[MessagePackObject(false)]
public class GlobalIdToTenantMapper : IApp
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GlobalIdToTenantMapper](CloudManager.Models.GlobalIdToTenantMapper.md)

#### Implements

IApp

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

###  GlobalIdToTenantMapper\(\)

```csharp
public GlobalIdToTenantMapper()
```

## Properties

###  TenantGloabalId

```csharp
[Key(0)]
public virtual string TenantGloabalId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  TenantIdentifier

```csharp
[Key(1)]
public virtual string TenantIdentifier { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

