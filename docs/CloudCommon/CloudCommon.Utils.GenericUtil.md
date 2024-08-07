#  Class GenericUtil

Namespace: [CloudCommon.Utils](CloudCommon.Utils.md)  
Assembly: CloudCommon.dll  

```csharp
public class GenericUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GenericUtil](CloudCommon.Utils.GenericUtil.md)

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
[GenericExtension.CloneByJson<GenericUtil\>\(GenericUtil\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<GenericUtil, U\>\(GenericUtil, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<GenericUtil\>\(GenericUtil\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<GenericUtil\>\(GenericUtil, params GenericUtil\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<GenericUtil\>\(GenericUtil\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<GenericUtil\>\(GenericUtil, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Methods

### replaced FindGenericMethodAndInvoke\(string, Type, object, params object\[\]\)

```csharp
public static object FindGenericMethodAndInvoke(string methodName, Type genericType, object obj, params object[] parameters)
```

#### Parameters

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`genericType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### replaced FindGenericMethodAndInvoke<K\>\(string, Type, object, params object\[\]\)

```csharp
public static K FindGenericMethodAndInvoke<K>(string methodName, Type genericType, object obj, params object[] parameters)
```

#### Parameters

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`genericType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 K

#### Type Parameters

`K` 

### replaced FindGenericMethodAndInvokeForStaticClass\(Type, string, Type, params object\[\]\)

```csharp
public static object FindGenericMethodAndInvokeForStaticClass(Type staticType, string methodName, Type genericType, params object[] parameters)
```

#### Parameters

`staticType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`genericType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### replaced FindMultiGenericMethodAndInvoke<T, K\>\(string, object, Type\[\], object\[\], int\)

```csharp
public static K FindMultiGenericMethodAndInvoke<T, K>(string methodName, object obj, Type[] genericTypes, object[] parameters, int genericsCount = 2) where T : class
```

#### Parameters

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`genericTypes` [Type](https://learn.microsoft.com/dotnet/api/system.type)\[\]

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

`genericsCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 K

#### Type Parameters

`T` 

`K` 

### replaced FindStaticGenericMethodAndInvoke<T, K\>\(string, Type, params object\[\]\)

```csharp
public static K FindStaticGenericMethodAndInvoke<T, K>(string methodName, Type genericType, params object[] parameters) where T : class
```

#### Parameters

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`genericType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 K

#### Type Parameters

`T` 

`K` 

### replaced FindStaticMultiGenericMethodAndInvoke<T, K\>\(string, Type\[\], object\[\], int\)

```csharp
public static K FindStaticMultiGenericMethodAndInvoke<T, K>(string methodName, Type[] genericTypes, object[] parameters, int genericsCount = 2) where T : class
```

#### Parameters

`methodName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`genericTypes` [Type](https://learn.microsoft.com/dotnet/api/system.type)\[\]

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

`genericsCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 K

#### Type Parameters

`T` 

`K` 

### replaced InvokeGenericMethod\(MethodInfo, Type, object, params object\[\]\)

```csharp
public static object InvokeGenericMethod(MethodInfo methodInfo, Type genericType, object obj, params object[] parameters)
```

#### Parameters

`methodInfo` [MethodInfo](https://learn.microsoft.com/dotnet/api/system.reflection.methodinfo)

`genericType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### replaced InvokeStaticGenericMethod\(MethodInfo, Type, params object\[\]\)

```csharp
public static object InvokeStaticGenericMethod(MethodInfo methodInfo, Type genericType, params object[] parameters)
```

#### Parameters

`methodInfo` [MethodInfo](https://learn.microsoft.com/dotnet/api/system.reflection.methodinfo)

`genericType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`parameters` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

