#  Class CloudSequenceIdGenerator

Namespace: [CloudCore.DataBase](CloudCore.DataBase.md)  
Assembly: CloudCore.dll  

used for generating sequence id's in cloud

```csharp
public class CloudSequenceIdGenerator : ISequenceIdGenerator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CloudSequenceIdGenerator](CloudCore.DataBase.CloudSequenceIdGenerator.md)

#### Implements

ISequenceIdGenerator

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  GetNext<T\>\(string\)

used to get the next sequence id as long

```csharp
public long GetNext<T>(string customSequence = null)
```

#### Parameters

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Type Parameters

`T` 

###  GetNextInt<T\>\(string\)

used to get the next sequence id as int

```csharp
public int GetNextInt<T>(string customSequence = null)
```

#### Parameters

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Type Parameters

`T` 

###  PatchKey<OldType, NewType\>\(\)

used for transforming one type key to another type key

```csharp
public bool PatchKey<OldType, NewType>()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`OldType` 

`NewType` 

###  PatchKey\(string, string\)

used for transforming one type key to another type key

```csharp
public bool PatchKey(string oldTypeName, string newTypeName)
```

#### Parameters

`oldTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Reset<T\>\(string\)

reset will set sequence id for the type name as 0

```csharp
public void Reset<T>(string customSequence = null)
```

#### Parameters

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T` 

###  SetCustom<T\>\(long, string\)

used to set the custom sequence value

```csharp
public void SetCustom<T>(long customValue, string customSequence = null)
```

#### Parameters

`customValue` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T` 

###  SetPrevious<T\>\(string\)

used to rollback previous sequence id

```csharp
public long SetPrevious<T>(string customSequence = null)
```

#### Parameters

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Type Parameters

`T` 

