#  Interface ISequenceIdGenerator

Namespace: [CommonInterfaces](CommonInterfaces.md)  
Assembly: CommonInterfaces.dll  

common interface for sequence id generating used in both onpremiese and cloud..

```csharp
public interface ISequenceIdGenerator
```

## Methods

###  GetNext<T\>\(string\)

used to get the next sequence id as long

```csharp
long GetNext<T>(string customSequence = null)
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
int GetNextInt<T>(string customSequence = null)
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
bool PatchKey<OldType, NewType>()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`OldType` 

`NewType` 

###  PatchKey\(string, string\)

used for transforming one type key to another type key

```csharp
bool PatchKey(string oldTypeName, string newTypeName)
```

#### Parameters

`oldTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  Reset<T\>\(string\)

reset will set sequence id for the type name as 0

```csharp
void Reset<T>(string customSequence = null)
```

#### Parameters

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T` 

###  SetCustom<T\>\(long, string\)

used to set the custom sequence value

```csharp
void SetCustom<T>(long customValue, string customSequence = null)
```

#### Parameters

`customValue` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T` 

###  SetPrevious<T\>\(string\)

used to rollback previous sequence id

```csharp
long SetPrevious<T>(string customSequence = null)
```

#### Parameters

`customSequence` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Type Parameters

`T` 

