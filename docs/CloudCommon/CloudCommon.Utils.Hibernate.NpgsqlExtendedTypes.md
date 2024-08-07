#  Class NpgsqlExtendedTypes

Namespace: [CloudCommon.Utils.Hibernate](CloudCommon.Utils.Hibernate.md)  
Assembly: CloudCommon.dll  

```csharp
public class NpgsqlExtendedTypes : SqlType, IEquatable<SqlType>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
SqlType ← 
[NpgsqlExtendedTypes](CloudCommon.Utils.Hibernate.NpgsqlExtendedTypes.md)

#### Implements

[IEquatable<SqlType\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

SqlType.GetHashCode\(\), 
SqlType.Equals\(object\), 
SqlType.Equals\(SqlType\), 
SqlType.ToString\(\), 
SqlType.DbType, 
SqlType.Length, 
SqlType.Precision, 
SqlType.Scale, 
SqlType.LengthDefined, 
SqlType.PrecisionDefined, 
SqlType.ScaleDefined, 
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
[GenericExtension.CloneByJson<NpgsqlExtendedTypes\>\(NpgsqlExtendedTypes\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<NpgsqlExtendedTypes, U\>\(NpgsqlExtendedTypes, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<NpgsqlExtendedTypes\>\(NpgsqlExtendedTypes\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<NpgsqlExtendedTypes\>\(NpgsqlExtendedTypes, params NpgsqlExtendedTypes\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<NpgsqlExtendedTypes\>\(NpgsqlExtendedTypes\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<NpgsqlExtendedTypes\>\(NpgsqlExtendedTypes, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Constructors

### replaced NpgsqlExtendedTypes\(DbType, NpgsqlDbType\)

```csharp
public NpgsqlExtendedTypes(DbType dbType, NpgsqlDbType npgDbType)
```

#### Parameters

`dbType` [DbType](https://learn.microsoft.com/dotnet/api/system.data.dbtype)

`npgDbType` NpgsqlDbType

### replaced NpgsqlExtendedTypes\(DbType, NpgsqlDbType, int\)

```csharp
public NpgsqlExtendedTypes(DbType dbType, NpgsqlDbType npgDbType, int length)
```

#### Parameters

`dbType` [DbType](https://learn.microsoft.com/dotnet/api/system.data.dbtype)

`npgDbType` NpgsqlDbType

`length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### replaced NpgsqlExtendedTypes\(DbType, NpgsqlDbType, byte, byte\)

```csharp
public NpgsqlExtendedTypes(DbType dbType, NpgsqlDbType npgDbType, byte precision, byte scale)
```

#### Parameters

`dbType` [DbType](https://learn.microsoft.com/dotnet/api/system.data.dbtype)

`npgDbType` NpgsqlDbType

`precision` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`scale` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Properties

### replaced NpgDbType

```csharp
public NpgsqlDbType NpgDbType { get; }
```

#### Property Value

 NpgsqlDbType

