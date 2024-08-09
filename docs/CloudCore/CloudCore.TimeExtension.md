#  Class TimeExtension

Namespace: [CloudCore](CloudCore.md)  
Assembly: CloudCore.dll  

used for find token expired or not

```csharp
public static class TimeExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TimeExtension](CloudCore.TimeExtension.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

###  IsExpired\(DateTime\)

```csharp
public static bool IsExpired(this DateTime dateTime)
```

#### Parameters

`dateTime` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  IsExpired\(DateTime?\)

```csharp
public static bool IsExpired(this DateTime? dateTime)
```

#### Parameters

`dateTime` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

