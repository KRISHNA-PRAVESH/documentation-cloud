#  Class GenericExtension

Namespace: [CloudCommon.Extensions](CloudCommon.Extensions.md)  
Assembly: CloudCommon.dll  

```csharp
public static class GenericExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GenericExtension](CloudCommon.Extensions.GenericExtension.md)

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

###  As<T\>\(object\)

This function creates the object of type T and copies the property values of source to that object and return it.
It is mainly used for easily convert the parent type object to its child type

```csharp
public static T As<T>(this object source)
```

#### Parameters

`source` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 T

#### Type Parameters

`T` 

###  Clone<T\>\(T\)

```csharp
public static T Clone<T>(T source)
```

#### Parameters

`source` T

#### Returns

 T

#### Type Parameters

`T` 

###  CloneByJson<T\>\(T\)

```csharp
public static T CloneByJson<T>(this T source)
```

#### Parameters

`source` T

#### Returns

 T

#### Type Parameters

`T` 

###  CloneByJsonUsingType\(object, Type\)

```csharp
public static object CloneByJsonUsingType(this object obj, Type objType)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`objType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  ContainsAnyOf\(string, params string\[\]\)

```csharp
public static bool ContainsAnyOf(this string source, params string[] list)
```

#### Parameters

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`list` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  CopyPropertiesTo<T, U\>\(T, U\)

```csharp
public static void CopyPropertiesTo<T, U>(this T source, U destination)
```

#### Parameters

`source` T

`destination` U

#### Type Parameters

`T` 

`U` 

###  DeepCopy<T\>\(T\)

```csharp
public static T DeepCopy<T>(this T source)
```

#### Parameters

`source` T

#### Returns

 T

#### Type Parameters

`T` 

### replaced EqualsAnyOf<T\>\(T, params T\[\]\)

```csharp
public static bool EqualsAnyOf<T>(this T source, params T[] list)
```

#### Parameters

`source` T

`list` T\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### replaced ToSerializedJsonString<T\>\(T, bool\)

```csharp
public static string ToSerializedJsonString<T>(this T source, bool formatOutput = false)
```

#### Parameters

`source` T

`formatOutput` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T` 

