#  Class Scope

Namespace: [CloudCore](CloudCore.md)  
Assembly: CloudCore.dll  

for retrieving delegation context

```csharp
public class Scope
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Scope](CloudCore.Scope.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  AssignCurrentDelegationFromSession\(\)

it will assign delegation model from the current session. if session not found it will throw unauthorized access exception

```csharp
public static TenantDelegationModel AssignCurrentDelegationFromSession()
```

#### Returns

 TenantDelegationModel

###  GetAppScope\(\)

used to get app scope with app global id

```csharp
public static TenantDelegationModel GetAppScope()
```

#### Returns

 TenantDelegationModel

###  GetLoggedInUserGlobalTenantId\(\)

used to get user global tenant id from login context

```csharp
public static string GetLoggedInUserGlobalTenantId()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetLoggedInUserId\(\)

used to get user id from login context

```csharp
public static string GetLoggedInUserId()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetLoggedInUserPrincipalName\(\)

used to get current logged in user principal name

```csharp
public static string GetLoggedInUserPrincipalName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetLoggedInUserTenant\(\)

used to get current logged in user tenant

```csharp
public static string GetLoggedInUserTenant()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetTenantScope\(string, string, string, string\)

used to get tenantScope with tenant global id

```csharp
public static TenantDelegationModel GetTenantScope(string tenant, string globalTenantId, string userId, string userPrincipalName)
```

#### Parameters

`tenant` [string](https://learn.microsoft.com/dotnet/api/system.string)

`globalTenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`userId` [string](https://learn.microsoft.com/dotnet/api/system.string)

`userPrincipalName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 TenantDelegationModel

