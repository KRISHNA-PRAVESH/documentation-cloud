#  Interface IAccess

Namespace: [CloudManager.Interfaces](CloudManager.Interfaces.md)  
Assembly: CloudManager.dll  

```csharp
public interface IAccess
```

## Properties

###  DirectoryAccessToken

access token fetched from directory server

```csharp
string DirectoryAccessToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  TenantGlobalId

global tenant sent from the directory server during authorization

```csharp
string TenantGlobalId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserId

used as logged in user identifier

```csharp
string UserId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserPrincipalName

```csharp
string UserPrincipalName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  UserTenant

used for getting current login context of user returns null if not exists

```csharp
string UserTenant { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

