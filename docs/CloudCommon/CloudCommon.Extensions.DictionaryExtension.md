#  Class DictionaryExtension

Namespace: [CloudCommon.Extensions](CloudCommon.Extensions.md)  
Assembly: CloudCommon.dll  

```csharp
public static class DictionaryExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DictionaryExtension](CloudCommon.Extensions.DictionaryExtension.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[GenericExtension.As<T\>\(object\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_As\_\_1\_System\_Object\_), 
[AssemblyUtil.ChangeType<T\>\(object\)](CloudCommon.Utils.AssemblyUtil.md\#CloudCommon\_Utils\_AssemblyUtil\_ChangeType\_\_1\_System\_Object\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_)

## Methods

###  ContainsKeySafe<T, S\>\(Dictionary<T, S\>, T\)

This method is Thread safe.

```csharp
public static bool ContainsKeySafe<T, S>(this Dictionary<T, S> dictionary, T key)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<T, S\>

`key` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

`S` 

###  GetCountSafe<T, S\>\(Dictionary<T, S\>\)

This method is Thread safe.

```csharp
public static int GetCountSafe<T, S>(this Dictionary<T, S> dictionary)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<T, S\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Type Parameters

`T` 

`S` 

###  GetSafe<T, S\>\(Dictionary<T, S\>, T\)

This method is Thread safe.

```csharp
public static S GetSafe<T, S>(this Dictionary<T, S> dictionary, T key)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<T, S\>

`key` T

#### Returns

 S

#### Type Parameters

`T` 

`S` 

###  NotContainsKey<T, S\>\(Dictionary<T, S\>, T\)

This method is Thread safe.

```csharp
public static bool NotContainsKey<T, S>(this Dictionary<T, S> dictionary, T key)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<T, S\>

`key` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

`S` 

###  PartialMatch<T\>\(Dictionary<string, T\>, string\)

```csharp
public static IEnumerable<T> PartialMatch<T>(this Dictionary<string, T> dictionary, string partialKey)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), T\>

`partialKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 

###  RemoveSafe<T, S\>\(Dictionary<T, S\>, T\)

This method is Thread safe.

```csharp
public static bool RemoveSafe<T, S>(this Dictionary<T, S> dictionary, T key)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<T, S\>

`key` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

`S` 

###  SetSafe<T, S\>\(Dictionary<T, S\>, T, S\)

This method is Thread safe.

```csharp
public static object SetSafe<T, S>(this Dictionary<T, S> dictionary, T key, S value)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<T, S\>

`key` T

`value` S

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Type Parameters

`T` 

`S` 

### replaced StartsWithMatch<T\>\(Dictionary<string, T\>, string\)

```csharp
public static IEnumerable<T> StartsWithMatch<T>(this Dictionary<string, T> dictionary, string partialKey)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), T\>

`partialKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 

