#  Interface IPersistentCacheService

Namespace: [CommonInterfaces](CommonInterfaces.md)  
Assembly: CommonInterfaces.dll  

```csharp
public interface IPersistentCacheService
```

## Methods

###  Delete\(string, bool\)

```csharp
bool Delete(string key, bool isPersistent = false)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isPersistent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  DeleteMatching\(string\)

```csharp
bool DeleteMatching(string partialKey)
```

#### Parameters

`partialKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Get\(string\)

```csharp
object Get(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  Get<T\>\(string\)

```csharp
T Get<T>(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

###  GetInitializationStatus\(\)

```csharp
bool GetInitializationStatus()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  GetMatching<T\>\(string\)

```csharp
List<T> GetMatching<T>(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  GetMatchingKeys\(string\)

```csharp
List<string> GetMatchingKeys(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

###  GetNewIfNotFound<T\>\(string\)

```csharp
T GetNewIfNotFound<T>(string key) where T : new()
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

###  HasKey\(string\)

```csharp
bool HasKey(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Initialize\(bool\)

```csharp
void Initialize(bool forceInitialize = false)
```

#### Parameters

`forceInitialize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  InitializeKeyAliasFromDb\(\)

```csharp
void InitializeKeyAliasFromDb()
```

###  Put\(string, object, bool\)

```csharp
void Put(string key, object value, bool isPersistent = false)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

`isPersistent` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  RegisterAlias\(string, string\)

```csharp
void RegisterAlias(string key, string alias)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`alias` [string](https://learn.microsoft.com/dotnet/api/system.string)

