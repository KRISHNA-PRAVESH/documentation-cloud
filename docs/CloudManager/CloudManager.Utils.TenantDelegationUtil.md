#  Class TenantDelegationUtil

Namespace: [CloudManager.Utils](CloudManager.Utils.md)  
Assembly: CloudManager.dll  

used for internal delegations

```csharp
public class TenantDelegationUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDelegationUtil](CloudManager.Utils.TenantDelegationUtil.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  CheckContextPresent\(out IAccess\)

```csharp
public static void CheckContextPresent(out IAccess model)
```

#### Parameters

`model` [IAccess](CloudManager.Interfaces.IAccess.md)

###  GetAccessToken\(\)

used to fetch access token of current delegation model

```csharp
public static string GetAccessToken()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetAppInstance\(\)

used to fetch the app instance from the current hosted app - app instance like %APPNAME%@%APPVERSION% fetched from the app settings environment

```csharp
public static string GetAppInstance()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetBaseAddress\(\)

used to base address of the hosted model

```csharp
public static string GetBaseAddress()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetTenantGlobalId\(\)

used to fetch tenant global id of current delegation model

```csharp
public static string GetTenantGlobalId()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  IsAppScopeApplied\(\)

used to identify app scope is applied or not

```csharp
public static bool IsAppScopeApplied()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

