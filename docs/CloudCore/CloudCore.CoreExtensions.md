#  Class CoreExtensions

Namespace: [CloudCore](CloudCore.md)  
Assembly: CloudCore.dll  

```csharp
public static class CoreExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CoreExtensions](CloudCore.CoreExtensions.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

###  persistentManager

```csharp
public static INHibernatePersistentManager persistentManager
```

#### Field Value

 INHibernatePersistentManager

## Methods

###  AddCloudAsyncPersistenceLayer\(IServiceCollection\)

used for adding asynchronous persistent layer as single ton object

```csharp
public static IServiceCollection AddCloudAsyncPersistenceLayer(this IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

###  AddCloudPersistenceLayer\(IServiceCollection\)

used for adding persistent layer as single ton object

```csharp
public static IServiceCollection AddCloudPersistenceLayer(this IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

###  AddFormsAuthenticationWithDataProtector\(IServiceCollection, Action<CookieAuthenticationOptions\>\)

used for adding forms-authentication with data protector as azure storage blob key , before that need to register AddCloudDataProtector in program.cs

```csharp
public static IServiceCollection AddFormsAuthenticationWithDataProtector(this IServiceCollection services, Action<CookieAuthenticationOptions> cookieOptions = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

`cookieOptions` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[CookieAuthenticationOptions](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.authentication.cookies.cookieauthenticationoptions)\>

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

###  AddMvcService\(IServiceCollection, bool, bool, bool\)

used add controller with views and web api configuration , initializing delegation context and http context accessor

```csharp
public static IServiceCollection AddMvcService(this IServiceCollection services, bool AddDefaultHttpContextAndDelegationFilters = false, bool AddAuthorizeCheck = false, bool addNullResolverAttribute = false)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

`AddDefaultHttpContextAndDelegationFilters` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`AddAuthorizeCheck` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`addNullResolverAttribute` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

###  AddPersistentAssembly\(IServiceCollection, Assembly\[\]\)

used for adding persistent assembly for the persistent operations

```csharp
public static IServiceCollection AddPersistentAssembly(this IServiceCollection services, Assembly[] persistentAssembly)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

`persistentAssembly` [Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\[\]

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

###  FetchInitialAccessToken\(IServiceCollection\)

used fetch initial access token from the kc authorization server

```csharp
public static IServiceCollection FetchInitialAccessToken(this IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

