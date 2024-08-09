#  Class DateTimeExtension

Namespace: [CloudCommon.Extensions](CloudCommon.Extensions.md)  
Assembly: CloudCommon.dll  

```csharp
public static class DateTimeExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DateTimeExtension](CloudCommon.Extensions.DateTimeExtension.md)

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

###  FromUnixTime\(long\)

```csharp
public static DateTime FromUnixTime(this long totalSeconds)
```

#### Parameters

`totalSeconds` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

###  GetStartingTimeOfPeriodType\(DateTime, PeriodType\)

```csharp
public static DateTime GetStartingTimeOfPeriodType(DateTime startTime, PeriodType periodType)
```

#### Parameters

`startTime` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

`periodType` [PeriodType](CloudCommon.Constants.PeriodType.md)

#### Returns

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

###  GetStringRange\(TimeSpan\)

```csharp
public static string GetStringRange(this TimeSpan timeSpan)
```

#### Parameters

`timeSpan` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  RoundDown\(DateTime, TimeSpan\)

```csharp
public static DateTime RoundDown(this DateTime dt, TimeSpan d)
```

#### Parameters

`dt` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

`d` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Returns

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

###  RoundUp\(DateTime, TimeSpan\)

```csharp
public static DateTime RoundUp(this DateTime dt, TimeSpan d)
```

#### Parameters

`dt` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

`d` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Returns

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

###  ToDD\_MMM\_YYYY\(DateTime\)

```csharp
public static string ToDD_MMM_YYYY(this DateTime dateTime)
```

#### Parameters

`dateTime` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ToHH\_MM\(DateTime\)

```csharp
public static string ToHH_MM(this DateTime dateTime)
```

#### Parameters

`dateTime` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ToHH\_MM\_TT\(DateTime\)

```csharp
public static string ToHH_MM_TT(this DateTime dateTime)
```

#### Parameters

`dateTime` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  ToMMM\_DD\_YYYY\(DateTime\)

```csharp
public static string ToMMM_DD_YYYY(this DateTime dateTime)
```

#### Parameters

`dateTime` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  WeekOfMonth\(DateTime\)

```csharp
public static int WeekOfMonth(this DateTime date)
```

#### Parameters

`date` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

