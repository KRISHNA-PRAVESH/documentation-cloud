#  Class CFlurlClientDefaults

Namespace: [CloudManager.Implementations](CloudManager.Implementations.md)  
Assembly: CloudManager.dll  

this CFlurlClientDefaults is used to for cpm and for directory servive api only

```csharp
public class CFlurlClientDefaults : FlurlDefaults
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
FlurlDefaults ← 
[CFlurlClientDefaults](CloudManager.Implementations.CFlurlClientDefaults.md)

#### Inherited Members

FlurlDefaults.GetDefaultHeader\(\), 
FlurlDefaults.GetAccessToken\(\), 
FlurlDefaults.VerifySignature\(object, string\), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

###  CFlurlClientDefaults\(\)

parameterless constructor

```csharp
public CFlurlClientDefaults()
```

## Methods

###  GetAccessToken\(\)

used to registering access token fetcher

```csharp
public override string GetAccessToken()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetDefaultHeader\(\)

used for default headers registering for flurl extension

```csharp
public override Dictionary<string, Func<object>> GetDefaultHeader()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>\>

###  VerifySignature\(object, string\)

used to verifying the signature

```csharp
public override bool VerifySignature(object data, string signature)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

`signature` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

