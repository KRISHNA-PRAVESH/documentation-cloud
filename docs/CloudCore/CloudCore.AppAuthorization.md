#  Class AppAuthorization

Namespace: [CloudCore](CloudCore.md)  
Assembly: CloudCore.dll  

used for application authorization process

```csharp
public class AppAuthorization
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppAuthorization](CloudCore.AppAuthorization.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

###  AppCacheIdentifier

cache identifier for app authorization

```csharp
public static string AppCacheIdentifier
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

###  GetAccessTokenByCache\(bool\)

used to fetch access token for app authorization, it will return ADTokenResponse if found in cache other wise it will generate new response.(Note : if access token expired it will automatically fetch new access token for you)

```csharp
public static Task<KCAuthResponse> GetAccessTokenByCache(bool force = false)
```

#### Parameters

`force` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

force fetching access token

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<KCAuthResponse\>

###  GetAccessTokenDefault\(\)

used to fetch access token for app authorization, it will return ADTokenResponse.

```csharp
public static Task<KCAuthResponse> GetAccessTokenDefault()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<KCAuthResponse\>

