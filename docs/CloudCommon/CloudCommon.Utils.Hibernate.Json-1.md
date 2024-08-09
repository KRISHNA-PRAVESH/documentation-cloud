#  Class Json<TSerializable\>

Namespace: [CloudCommon.Utils.Hibernate](CloudCommon.Utils.Hibernate.md)  
Assembly: CloudCommon.dll  

```csharp
public class Json<TSerializable> : IUserType where TSerializable : class
```

#### Type Parameters

`TSerializable` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Json<TSerializable\>](CloudCommon.Utils.Hibernate.Json\-1.md)

#### Implements

IUserType

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
[GenericExtension.CloneByJson<Json<TSerializable\>\>\(Json<TSerializable\>\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<Json<TSerializable\>, U\>\(Json<TSerializable\>, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<Json<TSerializable\>\>\(Json<TSerializable\>\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<Json<TSerializable\>\>\(Json<TSerializable\>, params Json<TSerializable\>\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<Json<TSerializable\>\>\(Json<TSerializable\>\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<Json<TSerializable\>\>\(Json<TSerializable\>, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Constructors

###  Json\(\)

```csharp
public Json()
```

## Properties

###  IsMutable

Are objects of this type mutable?

```csharp
public bool IsMutable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  ReturnedType

The type returned by <code>NullSafeGet()</code>

```csharp
public Type ReturnedType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

###  SqlTypes

The SQL types for the columns mapped by this type.

```csharp
public SqlType[] SqlTypes { get; }
```

#### Property Value

 SqlType\[\]

## Methods

###  Assemble\(object, object\)

Reconstruct an object from the cacheable representation. At the very least this
method should perform a deep copy if the type is mutable. See
<xref href="NHibernate.UserTypes.IUserType.Disassemble(System.Object)" data-throw-if-not-resolved="false"></xref>. (Optional operation if the second level cache is not used.)

```csharp
public object Assemble(object cached, object owner)
```

#### Parameters

`cached` [object](https://learn.microsoft.com/dotnet/api/system.object)

The cacheable representation.

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

The owner of the cached object.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

A reconstructed object from the cachable representation.

###  DeepCopy\(object\)

Return a deep copy of the persistent state, stopping at entities and at collections.

```csharp
public object DeepCopy(object value)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

Generally a collection element or entity field value mapped as this user type.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

A copy.

###  Disassemble\(object\)

Transform the object into its cacheable representation. At the very least this
method should perform a deep copy if the type is mutable. That may not be enough
for some implementations, however; for example, associations must be cached as
identifier values. (Optional operation if the second level cache is not used.)
Second level cache implementations may have additional requirements, like the
cacheable representation being binary serializable.

```csharp
public object Disassemble(object value)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to be cached.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

A cacheable representation of the object.

###  Equals\(object, object\)

Compare two instances of the class mapped by this type for persistent "equality"
ie. equality of persistent state

```csharp
public bool Equals(object x, object y)
```

#### Parameters

`x` [object](https://learn.microsoft.com/dotnet/api/system.object)

`y` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  GetHashCode\(object\)

Get a hashcode for the instance, consistent with persistence "equality"

```csharp
public int GetHashCode(object x)
```

#### Parameters

`x` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

###  NullSafeGet\(DbDataReader, string\[\], ISessionImplementor, object\)

Retrieve an instance of the mapped class from an ADO resultset.
Implementors should handle possibility of null values.

```csharp
public object NullSafeGet(DbDataReader rs, string[] names, ISessionImplementor session, object owner)
```

#### Parameters

`rs` [DbDataReader](https://learn.microsoft.com/dotnet/api/system.data.common.dbdatareader)

a DbDataReader

`names` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

column names

`session` ISessionImplementor

The session for which the operation is done. Allows access to
            <code>Factory.Dialect</code> and <code>Factory.ConnectionProvider.Driver</code> for adjusting to
            database or data provider capabilities.

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

the containing entity

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The value.

#### Exceptions

 HibernateException

HibernateException

###  NullSafeSet\(DbCommand, object, int, ISessionImplementor\)

Write an instance of the mapped class to a prepared statement.
Implementors should handle possibility of null values.
A multi-column type should be written to parameters starting from index.

```csharp
public void NullSafeSet(DbCommand cmd, object value, int index, ISessionImplementor session)
```

#### Parameters

`cmd` [DbCommand](https://learn.microsoft.com/dotnet/api/system.data.common.dbcommand)

a DbCommand

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

the object to write

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

command parameter index

`session` ISessionImplementor

The session for which the operation is done. Allows access to
            <code>Factory.Dialect</code> and <code>Factory.ConnectionProvider.Driver</code> for adjusting to
            database or data provider capabilities.

#### Exceptions

 HibernateException

HibernateException

###  Replace\(object, object, object\)

During merge, replace the existing (<code class="paramref">target</code>) value in the entity
we are merging to with a new (<code class="paramref">original</code>) value from the detached
entity we are merging. For immutable objects, or null values, it is safe to simply
return the first parameter. For mutable objects, it is safe to return a copy of the
first parameter. For objects with component values, it might make sense to
recursively replace component values.

```csharp
public object Replace(object original, object target, object owner)
```

#### Parameters

`original` [object](https://learn.microsoft.com/dotnet/api/system.object)

the value from the detached entity being merged

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

the value in the managed entity

`owner` [object](https://learn.microsoft.com/dotnet/api/system.object)

the managed entity

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

the value to be merged

