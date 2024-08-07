#  Class RetryUtil

Namespace: [CloudCommon.Utils](CloudCommon.Utils.md)  
Assembly: CloudCommon.dll  

```csharp
public class RetryUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RetryUtil](CloudCommon.Utils.RetryUtil.md)

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
[GenericExtension.CloneByJson<RetryUtil\>\(RetryUtil\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJson\_\_1\_\_\_0\_), 
[GenericExtension.CloneByJsonUsingType\(object, Type\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CloneByJsonUsingType\_System\_Object\_System\_Type\_), 
[ObjectUtil.ConvertToBinary\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinary\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryProtoBuf\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryProtoBuf\_System\_Object\_), 
[ObjectUtil.ConvertToBinaryWithGZipCompression\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToBinaryWithGZipCompression\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression<T\>\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_\_1\_System\_Object\_), 
[ObjectUtil.ConvertToObjectWithUnGZipCompression\(object, Type\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_ConvertToObjectWithUnGZipCompression\_System\_Object\_System\_Type\_), 
[GenericExtension.CopyPropertiesTo<RetryUtil, U\>\(RetryUtil, U\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_CopyPropertiesTo\_\_2\_\_\_0\_\_\_1\_), 
[GenericExtension.DeepCopy<RetryUtil\>\(RetryUtil\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_DeepCopy\_\_1\_\_\_0\_), 
[BinarySerializationUtil.Deserialize<T\>\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_\_1\_System\_Object\_), 
[BinarySerializationUtil.Deserialize\(object, Type\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Deserialize\_System\_Object\_System\_Type\_), 
[GenericExtension.EqualsAnyOf<RetryUtil\>\(RetryUtil, params RetryUtil\[\]\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_EqualsAnyOf\_\_1\_\_\_0\_\_\_0\_\_\_), 
[BinarySerializationUtil.Serialize\(object\)](CloudCommon.Utils.BinarySerializationUtil.md\#CloudCommon\_Utils\_BinarySerializationUtil\_Serialize\_System\_Object\_), 
[ObjectUtil.SerializeUsingUTF8JSON\(object\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeUsingUTF8JSON\_System\_Object\_), 
[ObjectUtil.SerializeWithProtoBuf<RetryUtil\>\(RetryUtil\)](CloudCommon.Utils.ObjectUtil.md\#CloudCommon\_Utils\_ObjectUtil\_SerializeWithProtoBuf\_\_1\_\_\_0\_), 
[GenericExtension.ToSerializedJsonString<RetryUtil\>\(RetryUtil, bool\)](CloudCommon.Extensions.GenericExtension.md\#CloudCommon\_Extensions\_GenericExtension\_ToSerializedJsonString\_\_1\_\_\_0\_System\_Boolean\_)

## Fields

### replaced generalRetryPolicy

```csharp
public static readonly RetryPolicy generalRetryPolicy
```

#### Field Value

 [RetryPolicy](https://github.com/App\-vNext/Polly/blob/4d2dd5ac2a270708b63b42de7c4272efc012d55c/src/Polly/Retry/RetryPolicy.cs)

### replaced generalRetryPolicyAsync

```csharp
public static readonly AsyncPolicy generalRetryPolicyAsync
```

#### Field Value

 [AsyncPolicy](https://github.com/App\-vNext/Polly/blob/4d2dd5ac2a270708b63b42de7c4272efc012d55c/src/Polly/AsyncPolicy.ContextAndKeys.cs)

### replaced internetConnectivityRetryPolicy

```csharp
public static readonly RetryPolicy internetConnectivityRetryPolicy
```

#### Field Value

 [RetryPolicy](https://github.com/App\-vNext/Polly/blob/4d2dd5ac2a270708b63b42de7c4272efc012d55c/src/Polly/Retry/RetryPolicy.cs)

### replaced longRetryPolicy

```csharp
public static readonly RetryPolicy longRetryPolicy
```

#### Field Value

 [RetryPolicy](https://github.com/App\-vNext/Polly/blob/4d2dd5ac2a270708b63b42de7c4272efc012d55c/src/Polly/Retry/RetryPolicy.cs)

### replaced onAsyncRetry

```csharp
public static readonly Action<Exception, TimeSpan> onAsyncRetry
```

#### Field Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception), [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)\>

### replaced onRetry

```csharp
public static readonly Action<Exception, TimeSpan, Context> onRetry
```

#### Field Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-3)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception), [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan), [Context](https://github.com/App\-vNext/Polly/blob/4d2dd5ac2a270708b63b42de7c4272efc012d55c/src/Polly/Context.Dictionary.cs)\>

### replaced retryOnceOnError

```csharp
public static readonly RetryPolicy retryOnceOnError
```

#### Field Value

 [RetryPolicy](https://github.com/App\-vNext/Polly/blob/4d2dd5ac2a270708b63b42de7c4272efc012d55c/src/Polly/Retry/RetryPolicy.cs)

## Methods

### replaced GetAsyncPolicyWithPredicate<T\>\(Func<T, bool\>, int, TimeSpan\)

it will retry when the exception conditions are matched

```csharp
public static AsyncPolicy GetAsyncPolicyWithPredicate<T>(Func<T, bool> predicate, int maxtry, TimeSpan coolDownTimeOut) where T : Exception
```

#### Parameters

`predicate` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<T, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

`maxtry` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`coolDownTimeOut` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Returns

 [AsyncPolicy](https://github.com/App\-vNext/Polly/blob/4d2dd5ac2a270708b63b42de7c4272efc012d55c/src/Polly/AsyncPolicy.ContextAndKeys.cs)

#### Type Parameters

`T` 

