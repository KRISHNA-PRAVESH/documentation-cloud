"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6779],{7268:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=o(4848),i=o(8453);const s={},l="Class RandomUtil",r={id:"CloudCommon/CloudCommon.Utils.RandomUtil",title:"Class RandomUtil",description:"Namespace: CloudCommon.Utils",source:"@site/docs/CloudCommon/CloudCommon.Utils.RandomUtil.md",sourceDirName:"CloudCommon",slug:"/CloudCommon/CloudCommon.Utils.RandomUtil",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.RandomUtil",draft:!1,unlisted:!1,editUrl:"https://github.com/KRISHNA-PRAVESH/documentation-cloud/blob/master/docs/CloudCommon/CloudCommon.Utils.RandomUtil.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Class RandomPasswordGenerator",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.RandomPasswordGenerator"},next:{title:"Class RetryUtil",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.RetryUtil"}},d={},c=[{value:"Inheritance",id:"Inheritance",level:4},{value:"Inherited Members",id:"Inherited-Members",level:4},{value:"Extension Methods",id:"Extension-Methods",level:4},{value:"Methods",id:"Methods",level:2},{value:"replaced GeneratePassword(int)",id:"replaced-GeneratePasswordint",level:3},{value:"Parameters",id:"Parameters",level:4},{value:"Returns",id:"Returns",level:4},{value:"replaced GeneratePasswordDontAllowSpecial(int)",id:"replaced-GeneratePasswordDontAllowSpecialint",level:3},{value:"Parameters",id:"Parameters-1",level:4},{value:"Returns",id:"Returns-1",level:4},{value:"replaced GetRandomNumber(int, int)",id:"replaced-GetRandomNumberint-int",level:3},{value:"Parameters",id:"Parameters-2",level:4},{value:"Returns",id:"Returns-2",level:4},{value:"replaced GetSecureRandomNumber(int, int)",id:"replaced-GetSecureRandomNumberint-int",level:3},{value:"Parameters",id:"Parameters-3",level:4},{value:"Returns",id:"Returns-3",level:4},{value:"replaced Guid()",id:"replaced-Guid",level:3},{value:"Returns",id:"Returns-4",level:4},{value:"replaced GuidAsBase64()",id:"replaced-GuidAsBase64",level:3},{value:"Returns",id:"Returns-5",level:4},{value:"replaced GuidAsString()",id:"replaced-GuidAsString",level:3},{value:"Returns",id:"Returns-6",level:4}];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"Class-RandomUtil",children:"Class RandomUtil"}),"\n",(0,t.jsxs)(n.p,{children:["Namespace: ",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils",children:"CloudCommon.Utils"}),(0,t.jsx)(n.br,{}),"\nAssembly: CloudCommon.dll"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public class RandomUtil\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Inheritance",children:"Inheritance"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object",children:"object"})," \u2190\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.RandomUtil",children:"RandomUtil"})]}),"\n",(0,t.jsx)(n.h4,{id:"Inherited-Members",children:"Inherited Members"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)",children:"object.Equals(object?)"}),",\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)",children:"object.Equals(object?, object?)"}),",\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gethashcode",children:"object.GetHashCode()"}),",\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gettype",children:"object.GetType()"}),",\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone",children:"object.MemberwiseClone()"}),",\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.referenceequals",children:"object.ReferenceEquals(object?, object?)"}),",\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.tostring",children:"object.ToString()"})]}),"\n",(0,t.jsx)(n.h4,{id:"Extension-Methods",children:"Extension Methods"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_As__1_System_Object_",children:"GenericExtension.As<T>(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.AssemblyUtil#CloudCommon_Utils_AssemblyUtil_ChangeType__1_System_Object_",children:"AssemblyUtil.ChangeType<T>(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJson__1___0_",children:"GenericExtension.CloneByJson<RandomUtil>(RandomUtil)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJsonUsingType_System_Object_System_Type_",children:"GenericExtension.CloneByJsonUsingType(object, Type)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinary_System_Object_",children:"ObjectUtil.ConvertToBinary(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryProtoBuf_System_Object_",children:"ObjectUtil.ConvertToBinaryProtoBuf(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryWithGZipCompression_System_Object_",children:"ObjectUtil.ConvertToBinaryWithGZipCompression(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression__1_System_Object_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression<T>(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression_System_Object_System_Type_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression(object, Type)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CopyPropertiesTo__2___0___1_",children:"GenericExtension.CopyPropertiesTo<RandomUtil, U>(RandomUtil, U)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_DeepCopy__1___0_",children:"GenericExtension.DeepCopy<RandomUtil>(RandomUtil)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize__1_System_Object_",children:"BinarySerializationUtil.Deserialize<T>(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize_System_Object_System_Type_",children:"BinarySerializationUtil.Deserialize(object, Type)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_EqualsAnyOf__1___0___0___",children:"GenericExtension.EqualsAnyOf<RandomUtil>(RandomUtil, params RandomUtil[])"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Serialize_System_Object_",children:"BinarySerializationUtil.Serialize(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeUsingUTF8JSON_System_Object_",children:"ObjectUtil.SerializeUsingUTF8JSON(object)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeWithProtoBuf__1___0_",children:"ObjectUtil.SerializeWithProtoBuf<RandomUtil>(RandomUtil)"}),",\n",(0,t.jsx)(n.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_ToSerializedJsonString__1___0_System_Boolean_",children:"GenericExtension.ToSerializedJsonString<RandomUtil>(RandomUtil, bool)"})]}),"\n",(0,t.jsx)(n.h2,{id:"Methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"replaced-GeneratePasswordint",children:"replaced GeneratePassword(int)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static string GeneratePassword(int length)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"length"})," ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})]}),"\n",(0,t.jsx)(n.h4,{id:"Returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})}),"\n",(0,t.jsx)(n.h3,{id:"replaced-GeneratePasswordDontAllowSpecialint",children:"replaced GeneratePasswordDontAllowSpecial(int)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static string GeneratePasswordDontAllowSpecial(int length)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"length"})," ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})]}),"\n",(0,t.jsx)(n.h4,{id:"Returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})}),"\n",(0,t.jsx)(n.h3,{id:"replaced-GetRandomNumberint-int",children:"replaced GetRandomNumber(int, int)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static int GetRandomNumber(int maxValue = 12, int minValue = 12)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"maxValue"})," ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minValue"})," ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})]}),"\n",(0,t.jsx)(n.h4,{id:"Returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})}),"\n",(0,t.jsx)(n.h3,{id:"replaced-GetSecureRandomNumberint-int",children:"replaced GetSecureRandomNumber(int, int)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static int GetSecureRandomNumber(int maxValue = 12, int minValue = 12)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"maxValue"})," ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"minValue"})," ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})]}),"\n",(0,t.jsx)(n.h4,{id:"Returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.int32",children:"int"})}),"\n",(0,t.jsx)(n.h3,{id:"replaced-Guid",children:"replaced Guid()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static Guid Guid()\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Returns-4",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.guid",children:"Guid"})}),"\n",(0,t.jsx)(n.h3,{id:"replaced-GuidAsBase64",children:"replaced GuidAsBase64()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static string GuidAsBase64()\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Returns-5",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})}),"\n",(0,t.jsx)(n.h3,{id:"replaced-GuidAsString",children:"replaced GuidAsString()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static string GuidAsString()\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Returns-6",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);