#  Class TenantGlobalIdCacheMapper

Namespace: [CloudCore.Essentials.Caching](CloudCore.Essentials.Caching.md)  
Assembly: CloudCore.dll  

```csharp
public class TenantGlobalIdCacheMapper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantGlobalIdCacheMapper](CloudCore.Essentials.Caching.TenantGlobalIdCacheMapper.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

###  globalIdToTenantMapperCache

it will store all the tenant schema name with respective tenant global id

```csharp
public static Dictionary<string, GlobalIdToTenantMapper> globalIdToTenantMapperCache
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), GlobalIdToTenantMapper\>

###  isInitialized

results the status of the global tenant id cache mapper state

```csharp
public static bool isInitialized
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

###  GetCurrentTenantSchemaIdentifier\(\)

used to fetch the tenant global id whose assigned in the current context

```csharp
public static string GetCurrentTenantSchemaIdentifier()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  GetTenantRedisGlobalCacheKeyName\(\)

used to fetch the catch key name of the current tenant

```csharp
public static string GetTenantRedisGlobalCacheKeyName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  Initialize\(\)

used to initialize the global id schema cache it will retrieve and store the results in the Redis cache also...

```csharp
public static void Initialize()
```

###  TryGetTenantIdentifier\(out string\)

it will retrieve the tenant identifier by locating in memory cache and the Redis cache and database also before that need to initialize the tenant global id cache manager first

```csharp
public static bool TryGetTenantIdentifier(out string tenantSchemaIdentifier)
```

#### Parameters

`tenantSchemaIdentifier` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

cache not initialization error

###  TryPutTenantIdentifier\(GlobalIdToTenantMapper, bool\)

it will persists the tenant global id's in Redis and database and in memory cache1

```csharp
public static bool TryPutTenantIdentifier(GlobalIdToTenantMapper globalIdToTenantMapper, bool dontPersist = false)
```

#### Parameters

`globalIdToTenantMapper` GlobalIdToTenantMapper

`dontPersist` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

