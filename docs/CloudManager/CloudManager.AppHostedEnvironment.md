#  Class AppHostedEnvironment

Namespace: [CloudManager](CloudManager.md)  
Assembly: CloudManager.dll  

```csharp
public class AppHostedEnvironment
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppHostedEnvironment](CloudManager.AppHostedEnvironment.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

###  AppHostedEnvironment\(IWebHostEnvironment\)

```csharp
public AppHostedEnvironment(IWebHostEnvironment webHostEnvironment)
```

#### Parameters

`webHostEnvironment` [IWebHostEnvironment](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.hosting.iwebhostenvironment)

## Properties

###  HostEnvironment

```csharp
public static IWebHostEnvironment HostEnvironment { get; set; }
```

#### Property Value

 [IWebHostEnvironment](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.hosting.iwebhostenvironment)

## Methods

###  EssentialsFolderPath\(\)

```csharp
public static string EssentialsFolderPath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  GetStaticFolderPath\(\)

```csharp
public static string GetStaticFolderPath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

