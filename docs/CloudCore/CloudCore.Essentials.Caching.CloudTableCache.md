#  Class CloudTableCache

Namespace: [CloudCore.Essentials.Caching](CloudCore.Essentials.Caching.md)  
Assembly: CloudCore.dll  

```csharp
public class CloudTableCache : ICommonTableCache
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CloudTableCache](CloudCore.Essentials.Caching.CloudTableCache.md)

#### Implements

ICommonTableCache

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

###  TableCacheInstance

```csharp
public static CloudTableCache TableCacheInstance { get; set; }
```

#### Property Value

 [CloudTableCache](CloudCore.Essentials.Caching.CloudTableCache.md)

## Methods

###  BulkDelete<T\>\(List<T\>\)

```csharp
public bool BulkDelete<T>(List<T> deletedItems) where T : class, ITableCache
```

#### Parameters

`deletedItems` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  BulkDeleteAndUpdate<T\>\(string, List<T\>\)

```csharp
public bool BulkDeleteAndUpdate<T>(string prefix, List<T> toUpdate) where T : class, ITableCache
```

#### Parameters

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

`toUpdate` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  BulkUpdate<T\>\(IEnumerable<T\>, bool\)

```csharp
public bool BulkUpdate<T>(IEnumerable<T> Items, bool persist) where T : class, ITableCache
```

#### Parameters

`Items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

`persist` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  ClearType<T\>\(\)

```csharp
public bool ClearType<T>() where T : class, ITableCache
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  Delete<T\>\(string, bool\)

```csharp
public T Delete<T>(string id, bool cacheOnly) where T : class, ITableCache
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`cacheOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 T

#### Type Parameters

`T` 

###  Get<T\>\(string\)

```csharp
public T Get<T>(string id) where T : class, ITableCache
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

###  Get<T\>\(\)

```csharp
public IEnumerable<T> Get<T>() where T : class, ITableCache
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 

###  GetAll<T\>\(\)

```csharp
public List<T> GetAll<T>() where T : class, ITableCache
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  GetByTenant<T\>\(int\)

```csharp
public List<T> GetByTenant<T>(int tenantId) where T : class, ITableCache
```

#### Parameters

`tenantId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  GetMatching<T\>\(string\)

```csharp
public List<T> GetMatching<T>(string key) where T : class, ITableCache
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

#### Type Parameters

`T` 

###  HasItem<T\>\(string\)

```csharp
public bool HasItem<T>(string id) where T : class, ITableCache
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  HasType\(Type\)

```csharp
public bool HasType(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  HasTypeWithOutValue<T\>\(out Dictionary<string, T\>\)

```csharp
public bool HasTypeWithOutValue<T>(out Dictionary<string, T> cachedValue) where T : class, ITableCache
```

#### Parameters

`cachedValue` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  Initialize<T\>\(\)

```csharp
public void Initialize<T>() where T : class, ITableCache
```

#### Type Parameters

`T` 

###  InitializeForType\(Type\)

```csharp
public void InitializeForType(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

###  InitializeOnly<T\>\(ICriterion\)

```csharp
public void InitializeOnly<T>(ICriterion Criteria) where T : class, ITableCache
```

#### Parameters

`Criteria` ICriterion

#### Type Parameters

`T` 

###  KeepReference<T\>\(\)

```csharp
public void KeepReference<T>() where T : class, ITableCache
```

#### Type Parameters

`T` 

###  NotifyCallback<T\>\(T, bool\)

```csharp
public bool NotifyCallback<T>(T data, bool toDelete) where T : class, ITableCache
```

#### Parameters

`data` T

`toDelete` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  Put<T\>\(T, bool\)

```csharp
public bool Put<T>(T data, bool persist) where T : class, ITableCache
```

#### Parameters

`data` T

`persist` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  PutForType\(Type, object, bool\)

```csharp
public bool PutForType(Type type, object data, bool persist = true)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

`persist` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  PutRedisCache\(Type, object\)

```csharp
public bool PutRedisCache(Type type, object data)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  RegisterCallback<T\>\(Func<object, bool, T\>\)

```csharp
public bool RegisterCallback<T>(Func<object, bool, T> function) where T : class, ITableCache
```

#### Parameters

`function` [Func](https://learn.microsoft.com/dotnet/api/system.func\-3)<[object](https://learn.microsoft.com/dotnet/api/system.object), [bool](https://learn.microsoft.com/dotnet/api/system.boolean), T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

###  clearCache<T\>\(\)

```csharp
public bool clearCache<T>() where T : class, ITableCache
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

