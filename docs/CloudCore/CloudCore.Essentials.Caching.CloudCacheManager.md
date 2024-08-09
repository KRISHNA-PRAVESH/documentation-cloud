#  Class CloudCacheManager

Namespace: [CloudCore.Essentials.Caching](CloudCore.Essentials.Caching.md)  
Assembly: CloudCore.dll  

CacheManager class is a central component in managing the caching of data within redis. It provides efficient data storage and retrieval, cache management, and related features to enhance application performance and responsiveness. The specifics of a CacheManager may vary depending on the caching requirements and the technology stack used in the application.

```csharp
public class CloudCacheManager : IPersistentCacheService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CloudCacheManager](CloudCore.Essentials.Caching.CloudCacheManager.md)

#### Implements

IPersistentCacheService

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

###  CloudCacheManager\(\)

```csharp
public CloudCacheManager()
```

## Properties

###  Service

```csharp
public static IPersistentCacheService Service { get; }
```

#### Property Value

 IPersistentCacheService

## Methods

###  Delete\(string, bool\)

The Delete method is used to remove data from a cache with an option to update the cache if needed. It provides a way to efficiently manage cached data within an application, and proper exception handling should be considered to ensure robust error management.

```csharp
public bool Delete(string key, bool isPersistent = false)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isPersistent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  DeleteAsync\(string, bool\)

The Delete method is used to remove data from a cache with an option to update the cache Asynchronously if needed. It provides a way to efficiently manage cached data within an application, and proper exception handling should be considered to ensure robust error management.

```csharp
public Task<bool> DeleteAsync(string key, bool isPersistent = false)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isPersistent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  DeleteMatching\(string\)

```csharp
public bool DeleteMatching(string partialKey)
```

#### Parameters

`partialKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Get\(string\)

The Get method is used to retrieve data from a persistent cache

```csharp
public object Get(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Exceptions

 JsonSerializationException

###  Get<T\>\(string\)

The Get method is used to retrieve data from a persistent cache

```csharp
public T Get<T>(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

###  GetInitializationStatus\(\)

returns true if persistent cache is initialized for respective tenant present in delegation context

```csharp
public bool GetInitializationStatus()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

 Error

###  GetMatching<T\>\(string\)

```csharp
public List<T> GetMatching<T>(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  GetMatchingKeys\(string\)

```csharp
public List<string> GetMatchingKeys(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

###  GetNewIfNotFound<T\>\(string\)

```csharp
public T GetNewIfNotFound<T>(string key) where T : new()
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

###  HasKey\(string\)

check if the persistent cache key exists or not for respective tenant present in delegation context

```csharp
public bool HasKey(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

 Error

###  Initialize\(bool\)

it will fetch the persistent cache from db and set it to the redis cache for the respective tenant presents in the delegation context

```csharp
public void Initialize(bool forceInitialize = false)
```

#### Parameters

`forceInitialize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  InitializeKeyAliasFromDb\(\)

```csharp
public void InitializeKeyAliasFromDb()
```

###  Put\(string, object, bool\)

The Put method is used to store data in a cache with an option to update the cache if needed. It is a flexible and versatile method for improving application performance by efficiently storing and retrieving frequently accessed data. Proper exception handling should be considered to ensure robust error management.

```csharp
public void Put(string key, object value, bool isPersistent = false)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

`isPersistent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  PutAsync\(string, string, bool\)

The Put method is used to store data in a cache with an option to update the cache asynchronously if needed. It is a flexible and versatile method for improving application performance by efficiently storing and retrieving frequently accessed data. Proper exception handling should be considered to ensure robust error management.

```csharp
public Task<bool> PutAsync(string key, string value, bool isPersistent = false)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isPersistent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

###  RegisterAlias\(string, string\)

```csharp
public void RegisterAlias(string key, string alias)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`alias` [string](https://learn.microsoft.com/dotnet/api/system.string)

###  RegisterCacheService\(IPersistentCacheService\)

```csharp
public static void RegisterCacheService(IPersistentCacheService service)
```

#### Parameters

`service` IPersistentCacheService

