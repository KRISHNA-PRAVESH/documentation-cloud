#  Class MemoryUnitConverterExtension

Namespace: [CloudCommon.Extensions](CloudCommon.Extensions.md)  
Assembly: CloudCommon.dll  

```csharp
public static class MemoryUnitConverterExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MemoryUnitConverterExtension](CloudCommon.Extensions.MemoryUnitConverterExtension.md)

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

###  ConvertByteToKbMbGbTb\(int, int\)

```csharp
public static string ConvertByteToKbMbGbTb(this int value, int decimalPlaces = 0)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`decimalPlaces` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ConvertByteToKbMbGbTb\(long, int\)

```csharp
public static string ConvertByteToKbMbGbTb(this long value, int decimalPlaces = 0)
```

#### Parameters

`value` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`decimalPlaces` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ConvertByteToMemoryUnitAndValue\(long, int\)

```csharp
public static KeyValuePair<MemoryUnitSize, double> ConvertByteToMemoryUnitAndValue(this long value, int decimalPlaces = 0)
```

#### Parameters

`value` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`decimalPlaces` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[MemoryUnitSize](CloudCommon.Extensions.MemoryUnitSize.md), [double](https://learn.microsoft.com/dotnet/api/system.double)\>

###  ConvertKbToMbGbTb\(long\)

Used to update configuration such as postgreSql.conf

```csharp
public static string ConvertKbToMbGbTb(this long value)
```

#### Parameters

`value` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ConvertMbToGbTb\(long, int\)

```csharp
public static string ConvertMbToGbTb(this long value, int decimalPlaces = 0)
```

#### Parameters

`value` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`decimalPlaces` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ConvertToBytes\(double, MemoryUnitSize\)

```csharp
public static long ConvertToBytes(this double value, MemoryUnitSize valueUnit)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

`valueUnit` [MemoryUnitSize](CloudCommon.Extensions.MemoryUnitSize.md)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

###  ConvertToMemoryUnitSize\(int, MemoryUnitSize, int\)

```csharp
public static double ConvertToMemoryUnitSize(this int value, MemoryUnitSize unit, int decimalPlaces = 0)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`unit` [MemoryUnitSize](CloudCommon.Extensions.MemoryUnitSize.md)

`decimalPlaces` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

###  ConvertToMemoryUnitSize\(long, MemoryUnitSize, int\)

```csharp
public static double ConvertToMemoryUnitSize(this long value, MemoryUnitSize unit, int decimalPlaces = 0)
```

#### Parameters

`value` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`unit` [MemoryUnitSize](CloudCommon.Extensions.MemoryUnitSize.md)

`decimalPlaces` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

###  ConvertToMemoryUnitSize\(double, MemoryUnitSize, int\)

```csharp
public static double ConvertToMemoryUnitSize(this double value, MemoryUnitSize unit, int decimalPlaces = 0)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

`unit` [MemoryUnitSize](CloudCommon.Extensions.MemoryUnitSize.md)

`decimalPlaces` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

###  GetMemoryUnitString\(MemoryUnitSize\)

```csharp
public static string GetMemoryUnitString(this MemoryUnitSize unit)
```

#### Parameters

`unit` [MemoryUnitSize](CloudCommon.Extensions.MemoryUnitSize.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

