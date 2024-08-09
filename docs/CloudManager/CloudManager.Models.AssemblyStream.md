#  Class AssemblyStream

Namespace: [CloudManager.Models](CloudManager.Models.md)  
Assembly: CloudManager.dll  

used for the serve assembly utilization

```csharp
[MessagePackObject(false)]
public class AssemblyStream
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AssemblyStream](CloudManager.Models.AssemblyStream.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

###  AssemblyStream\(\)

parameter less constructor

```csharp
public AssemblyStream()
```

###  AssemblyStream\(string, byte\[\]\)

used to create an assembly stream instance with arguments

```csharp
public AssemblyStream(string assemblyName, byte[] assemblyBytes)
```

#### Parameters

`assemblyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`assemblyBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

## Properties

###  AssemblyBytes

value of the assembly going to write in cpm

```csharp
[Key(1)]
public byte[] AssemblyBytes { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

###  AssemblyName

name of the assembly going to load it's an unique identifier of the app instance also

```csharp
[Key(0)]
public string AssemblyName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

