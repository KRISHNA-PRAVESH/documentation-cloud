"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7681],{802:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(4848),s=t(8453);const i={},r="Class ServerResponseUtil",l={id:"CloudCommon/CloudCommon.Http.ServerResponseUtil",title:"Class ServerResponseUtil",description:"Namespace: CloudCommon.Http",source:"@site/docs/CloudCommon/CloudCommon.Http.ServerResponseUtil.md",sourceDirName:"CloudCommon",slug:"/CloudCommon/CloudCommon.Http.ServerResponseUtil",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.ServerResponseUtil",draft:!1,unlisted:!1,editUrl:"https://github.com/KRISHNA-PRAVESH/documentation-cloud/blob/master/docs/CloudCommon/CloudCommon.Http.ServerResponseUtil.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Class ServerResponse<T\\>",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.ServerResponse-1"},next:{title:"Class UrlSegments",permalink:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.UrlSegments"}},c={},d=[{value:"Inheritance",id:"Inheritance",level:4},{value:"Inherited Members",id:"Inherited-Members",level:4},{value:"Extension Methods",id:"Extension-Methods",level:4},{value:"Methods",id:"Methods",level:2},{value:"CreateCustomResponseAsByte(object, string, HttpStatusCode)",id:"CreateCustomResponseAsByteobject-string-HttpStatusCode",level:3},{value:"Parameters",id:"Parameters",level:4},{value:"Returns",id:"Returns",level:4},{value:"CreateSuccessResponseAsByte(object, string)",id:"CreateSuccessResponseAsByteobject-string",level:3},{value:"Parameters",id:"Parameters-1",level:4},{value:"Returns",id:"Returns-1",level:4}];function m(e){const o={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"Class-ServerResponseUtil",children:"Class ServerResponseUtil"}),"\n",(0,n.jsxs)(o.p,{children:["Namespace: ",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http",children:"CloudCommon.Http"}),(0,n.jsx)(o.br,{}),"\nAssembly: CloudCommon.dll"]}),"\n",(0,n.jsx)(o.p,{children:"used for non generic types"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public class ServerResponseUtil\n"})}),"\n",(0,n.jsx)(o.h4,{id:"Inheritance",children:"Inheritance"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object",children:"object"})," \u2190\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Http.ServerResponseUtil",children:"ServerResponseUtil"})]}),"\n",(0,n.jsx)(o.h4,{id:"Inherited-Members",children:"Inherited Members"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)",children:"object.Equals(object?)"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)",children:"object.Equals(object?, object?)"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gethashcode",children:"object.GetHashCode()"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.gettype",children:"object.GetType()"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone",children:"object.MemberwiseClone()"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.referenceequals",children:"object.ReferenceEquals(object?, object?)"}),",\n",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object.tostring",children:"object.ToString()"})]}),"\n",(0,n.jsx)(o.h4,{id:"Extension-Methods",children:"Extension Methods"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_As__1_System_Object_",children:"GenericExtension.As<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.AssemblyUtil#CloudCommon_Utils_AssemblyUtil_ChangeType__1_System_Object_",children:"AssemblyUtil.ChangeType<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJson__1___0_",children:"GenericExtension.CloneByJson<ServerResponseUtil>(ServerResponseUtil)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CloneByJsonUsingType_System_Object_System_Type_",children:"GenericExtension.CloneByJsonUsingType(object, Type)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinary_System_Object_",children:"ObjectUtil.ConvertToBinary(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryProtoBuf_System_Object_",children:"ObjectUtil.ConvertToBinaryProtoBuf(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToBinaryWithGZipCompression_System_Object_",children:"ObjectUtil.ConvertToBinaryWithGZipCompression(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression__1_System_Object_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_ConvertToObjectWithUnGZipCompression_System_Object_System_Type_",children:"ObjectUtil.ConvertToObjectWithUnGZipCompression(object, Type)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_CopyPropertiesTo__2___0___1_",children:"GenericExtension.CopyPropertiesTo<ServerResponseUtil, U>(ServerResponseUtil, U)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_DeepCopy__1___0_",children:"GenericExtension.DeepCopy<ServerResponseUtil>(ServerResponseUtil)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize__1_System_Object_",children:"BinarySerializationUtil.Deserialize<T>(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Deserialize_System_Object_System_Type_",children:"BinarySerializationUtil.Deserialize(object, Type)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_EqualsAnyOf__1___0___0___",children:"GenericExtension.EqualsAnyOf<ServerResponseUtil>(ServerResponseUtil, params ServerResponseUtil[])"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.BinarySerializationUtil#CloudCommon_Utils_BinarySerializationUtil_Serialize_System_Object_",children:"BinarySerializationUtil.Serialize(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeUsingUTF8JSON_System_Object_",children:"ObjectUtil.SerializeUsingUTF8JSON(object)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Utils.ObjectUtil#CloudCommon_Utils_ObjectUtil_SerializeWithProtoBuf__1___0_",children:"ObjectUtil.SerializeWithProtoBuf<ServerResponseUtil>(ServerResponseUtil)"}),",\n",(0,n.jsx)(o.a,{href:"/documentation-cloud/docs/CloudCommon/CloudCommon.Extensions.GenericExtension#CloudCommon_Extensions_GenericExtension_ToSerializedJsonString__1___0_System_Boolean_",children:"GenericExtension.ToSerializedJsonString<ServerResponseUtil>(ServerResponseUtil, bool)"})]}),"\n",(0,n.jsx)(o.h2,{id:"Methods",children:"Methods"}),"\n",(0,n.jsx)(o.h3,{id:"CreateCustomResponseAsByteobject-string-HttpStatusCode",children:"CreateCustomResponseAsByte(object, string, HttpStatusCode)"}),"\n",(0,n.jsx)(o.p,{children:"used to fetch new server response as customized one"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public static byte[] CreateCustomResponseAsByte(object data, string message, HttpStatusCode httpStatusCode)\n"})}),"\n",(0,n.jsx)(o.h4,{id:"Parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"data"})," ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object",children:"object"})]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"message"})," ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"httpStatusCode"})," ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.net.httpstatuscode",children:"HttpStatusCode"})]}),"\n",(0,n.jsx)(o.h4,{id:"Returns",children:"Returns"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.byte",children:"byte"}),"[]"]}),"\n",(0,n.jsx)(o.h3,{id:"CreateSuccessResponseAsByteobject-string",children:"CreateSuccessResponseAsByte(object, string)"}),"\n",(0,n.jsx)(o.p,{children:"used to fetch new server response as success as byte"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:"public static byte[] CreateSuccessResponseAsByte(object data, string message = null)\n"})}),"\n",(0,n.jsx)(o.h4,{id:"Parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"data"})," ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.object",children:"object"})]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"message"})," ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.string",children:"string"})]}),"\n",(0,n.jsx)(o.h4,{id:"Returns-1",children:"Returns"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/dotnet/api/system.byte",children:"byte"}),"[]"]})]})}function a(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>l});var n=t(6540);const s={},i=n.createContext(s);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);