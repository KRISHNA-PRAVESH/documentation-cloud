#  Class StringExtension

Namespace: [CloudCommon.Extensions](CloudCommon.Extensions.md)  
Assembly: CloudCommon.dll  

```csharp
public static class StringExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StringExtension](CloudCommon.Extensions.StringExtension.md)

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

###  CheckStartEnd\(string, string, string\)

```csharp
public static bool CheckStartEnd(this string str, string sStart, string sEnd)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sStart` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sEnd` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  CleanTruncatedJson\(string\)

```csharp
public static string CleanTruncatedJson(this string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  Contains\(string, string, StringComparison\)

```csharp
public static bool Contains(this string source, string toCheck, StringComparison comp)
```

#### Parameters

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`toCheck` [string](https://learn.microsoft.com/dotnet/api/system.string)

`comp` [StringComparison](https://learn.microsoft.com/dotnet/api/system.stringcomparison)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

###  DecodeBase64\(string\)

```csharp
public static string DecodeBase64(this string encodedText)
```

#### Parameters

`encodedText` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

###  DeserializeFromJson<T\>\(string\)

```csharp
public static T DeserializeFromJson<T>(this string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

###  DeserializeFromJsonUsingType\(string, Type\)

```csharp
public static object DeserializeFromJsonUsingType(this string str, Type serializedType)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

`serializedType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

###  EncodeBase64\(string\)

```csharp
public static string EncodeBase64(this string text)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced FirstCharacterToLower\(string\)

```csharp
public static string FirstCharacterToLower(this string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced FirstCharacterToUpper\(string\)

```csharp
public static string FirstCharacterToUpper(this string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced FormatWith\(string, params object\[\]\)

```csharp
public static string FormatWith(this string s, params object[] args)
```

#### Parameters

`s` [string](https://learn.microsoft.com/dotnet/api/system.string)

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced GetUserTenant\(string\)

```csharp
public static string GetUserTenant(this string user)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced HandleDeserializationError\(object, ErrorEventArgs\)

```csharp
public static void HandleDeserializationError(object sender, ErrorEventArgs errorArgs)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

`errorArgs` ErrorEventArgs

### replaced IsNullOrEmpty\(string\)

```csharp
public static bool IsNullOrEmpty(this string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### replaced SetDebugMode\(\)

```csharp
public static void SetDebugMode()
```

### replaced SplitCompare\(string, string\)

```csharp
public static bool SplitCompare(this string val, string compare)
```

#### Parameters

`val` [string](https://learn.microsoft.com/dotnet/api/system.string)

`compare` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### replaced StartsWithAnyOf\(string, params string\[\]\)

```csharp
public static bool StartsWithAnyOf(this string source, params string[] list)
```

#### Parameters

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`list` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### replaced ToSecureString\(string\)

```csharp
public static SecureString ToSecureString(this string plainString)
```

#### Parameters

`plainString` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SecureString](https://learn.microsoft.com/dotnet/api/system.security.securestring)

### replaced TrimEnd\(string, string\)

```csharp
public static string TrimEnd(this string str, string sEndValue)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sEndValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced TrimStart\(string, string\)

```csharp
public static string TrimStart(this string str, string sStartValue)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sStartValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced TrimStartEnd\(string, string, string\)

```csharp
public static string TrimStartEnd(this string str, string sStart, string sEnd)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sStart` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sEnd` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### replaced WordSplitEquals\(string, string, StringComparison\)

```csharp
public static bool WordSplitEquals(this string source, string toCheck, StringComparison comp = StringComparison.OrdinalIgnoreCase)
```

#### Parameters

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`toCheck` [string](https://learn.microsoft.com/dotnet/api/system.string)

`comp` [StringComparison](https://learn.microsoft.com/dotnet/api/system.stringcomparison)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### replaced sha256\_hash\(string\)

```csharp
public static string sha256_hash(this string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

