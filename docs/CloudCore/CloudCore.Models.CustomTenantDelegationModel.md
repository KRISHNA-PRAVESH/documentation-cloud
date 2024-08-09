#  Class CustomTenantDelegationModel

Namespace: [CloudCore.Models](CloudCore.Models.md)  
Assembly: CloudCore.dll  

```csharp
public class CustomTenantDelegationModel : IAccess
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CustomTenantDelegationModel](CloudCore.Models.CustomTenantDelegationModel.md)

#### Implements

IAccess

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

###  DirectoryAccessToken

access token fetched from directory server

```csharp
public string DirectoryAccessToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  TenantGlobalId

global tenant sent from the directory server during authorization

```csharp
public string TenantGlobalId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserId

used as logged in user identifier

```csharp
public string UserId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserPrincipalName

```csharp
public string UserPrincipalName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserTenant

used for getting current login context of user returns null if not exists

```csharp
public string UserTenant { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

