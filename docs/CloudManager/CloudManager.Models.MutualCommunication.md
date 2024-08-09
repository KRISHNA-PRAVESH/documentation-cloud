#  Class MutualCommunication

Namespace: [CloudManager.Models](CloudManager.Models.md)  
Assembly: CloudManager.dll  

```csharp
[MessagePackObject(false)]
public class MutualCommunication
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MutualCommunication](CloudManager.Models.MutualCommunication.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

###  FileData

```csharp
[Key(1)]
public byte[] FileData { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

###  Identifier

```csharp
[Key(2)]
public string Identifier { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  KeyName

```csharp
[Key(0)]
public string KeyName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

