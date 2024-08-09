#  Class ObjectUtil

Namespace: [CloudCommon.Utils](CloudCommon.Utils.md)  
Assembly: CloudCommon.dll  

```csharp
public static class ObjectUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObjectUtil](CloudCommon.Utils.ObjectUtil.md)

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

###  ConvertToBinary\(object\)

```csharp
public static byte[] ConvertToBinary(this object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

###  ConvertToBinaryProtoBuf\(object\)

```csharp
public static byte[] ConvertToBinaryProtoBuf(this object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

###  ConvertToBinaryWithGZipCompression\(object\)

```csharp
public static byte[] ConvertToBinaryWithGZipCompression(this object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

###  ConvertToObject<T\>\(byte\[\]\)

```csharp
public static T ConvertToObject<T>(this byte[] data)
```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 T

#### Type Parameters

`T` 

###  ConvertToObject\(byte\[\], Type\)

```csharp
public static object ConvertToObject(this byte[] data, Type type)
```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  ConvertToObjectProtoBuf<T\>\(byte\[\]\)

```csharp
public static T ConvertToObjectProtoBuf<T>(this byte[] data)
```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 T

#### Type Parameters

`T` 

###  ConvertToObjectWithUnGZipCompression<T\>\(object\)

```csharp
public static T ConvertToObjectWithUnGZipCompression<T>(this object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 T

#### Type Parameters

`T` 

###  ConvertToObjectWithUnGZipCompression\(object, Type\)

```csharp
public static object ConvertToObjectWithUnGZipCompression(this object data, Type type)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  DeepCopy<T\>\(T\)

```csharp
public static T DeepCopy<T>(T source)
```

#### Parameters

`source` T

#### Returns

 T

#### Type Parameters

`T` 

###  DeserializeUsingUTF8JSON<T\>\(byte\[\]\)

```csharp
public static T DeserializeUsingUTF8JSON<T>(this byte[] byteData)
```

#### Parameters

`byteData` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 T

#### Type Parameters

`T` 

###  DeserializeUsingUTF8JSON\(byte\[\], Type\)

```csharp
public static object DeserializeUsingUTF8JSON(this byte[] byteData, Type type)
```

#### Parameters

`byteData` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  DeserializeUsingUTF8JSONWithStream<T\>\(Stream\)

```csharp
public static T DeserializeUsingUTF8JSONWithStream<T>(this Stream streamData)
```

#### Parameters

`streamData` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

#### Returns

 T

#### Type Parameters

`T` 

###  DeserializeUsingUTF8JSONWithStream\(Stream, Type\)

```csharp
public static object DeserializeUsingUTF8JSONWithStream(this Stream streamData, Type type)
```

#### Parameters

`streamData` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  DeserializeWithProtoBuf<T\>\(byte\[\]\)

```csharp
public static T DeserializeWithProtoBuf<T>(this byte[] data)
```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 T

#### Type Parameters

`T` 

###  GetType\(string\)

```csharp
public static Type GetType(string typeName)
```

#### Parameters

`typeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

###  IsEqual\(object, object\)

```csharp
public static bool IsEqual(object object1, object object2)
```

#### Parameters

`object1` [object](https://learn.microsoft.com/dotnet/api/system.object)

`object2` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  SerializeUsingUTF8JSON\(object\)

```csharp
public static byte[] SerializeUsingUTF8JSON(this object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### replaced SerializeWithProtoBuf<T\>\(T\)

```csharp
public static byte[] SerializeWithProtoBuf<T>(this T obj)
```

#### Parameters

`obj` T

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Type Parameters

`T` 

