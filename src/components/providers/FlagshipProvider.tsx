"use client";

import { FlagshipContainer } from "@thinkflagship/horizon-web-shorts";
import { usePathname } from "next/navigation";
import React, { useMemo } from 'react';

const FlagshipProvider = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();

  const licenseKey = useMemo(() => {
    const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

    const customDemoRoutes = [
      "/demo/restaurant",
      "/demo/home",
      "/demo/fashion",
      "/demo/electronics",
      "/demo/fitness",
      "/demo/beauty",
      "/demo/video-menu",
    ];

    switch (normalizedPathname) {
      case "/demo/afghan-wireless":
        return "pk_live_7a5a452a5bc5fac219b8a1700411b159a0fd774aedd7dd08.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWZnaGFuIFdpcmVsZXNzIiwicGxhdGZvcm1UeXBlIjoiV0VCIiwiZG9tYWluIjp7ImRvbWFpbiI6Imh0dHBzOi8vd3d3Lmhvcml6b25leHAuY29tL2RlbW8vYWZnaGFuLXdpcmVsZXNzLyIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMTEtMTBUMTU6Mzk6NDIuNzkwWiIsImNyZWF0ZWRCeSI6IjY4ZmM3NTJlZTFmODhmY2FhODE0Nzc4OSIsInRlbmFudElkIjoiNjkzMWE3NzVkMDMzNGUxZmNhOGE4YmQ2IiwiX2lkIjoiNjkzMWFiM2U5ZjhjYzRkZDNlYzg4Yjc0IiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzY0ODYyNzgyLCJleHAiOjQ5MTg0NjI3ODJ9.9Pa8EAmsAvvC3KSPQDbgFdIX_a2hkOOSPyDQHhnFqAc";
      case "/demo/mtb":
        return "pk_live_883ea5f8dc119decf3a3d4ee9e230ab1338f1b6bd359acf6.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTVRCIE5lbyIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2hvcml6b25leHAuY29tL2RlbW8vbXRiLyIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMTEtMTNUMTU6MzY6NTIuNjkzWiIsImNyZWF0ZWRCeSI6IjY4ZmM3NTJlZTFmODhmY2FhODE0Nzc4OSIsInRlbmFudElkIjoiNjkzNTllMDViNjJiZDMyYTZkMmVjOTY0IiwiX2lkIjoiNjkzNTlmMTQ5ZjhjYzRkZDNlYzg4ZGMwIiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzY1MTIxODEyLCJleHAiOjQ5MTg3MjE4MTJ9.KQYQoh7S4wrbwvoO4mkV7xNrY7bWbvMNODoHQd-QROM";
      case "/demo/launch":
        return "pk_live_219f56798523f4e1cebec201ca96352cf8ce3b2af80715a3.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVtbyIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2hvcml6b25leHAuY29tL2RlbW8vbGF1bmNoLyIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMTEtMjFUMTM6Mzc6MjAuNTM0WiIsImNyZWF0ZWRCeSI6IjY4ZmM3NTJlZTFmODhmY2FhODE0Nzc4OSIsInRlbmFudElkIjoiNjkzZmNjYzdkMDMzNGUxZmNhOGFkNmY5IiwiX2lkIjoiNjk0MDBmMTA3YjlkY2YxMmRlZTAzNWY4IiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzY1ODA1ODQwLCJleHAiOjQ5MTk0MDU4NDB9.fg4DgDyDXZeXRmdf1JY84jyn6CoGA1XsClZNY4OQdBQ";
      case "/":
        return "pk_live_8f5e8df45e4b22b96a8730728d373995207863dabec734f8.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSG9yaXpvbiIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2hvcml6b25leHAuY29tIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0xMC0wMVQwNzowNDo1MC4zMjlaIiwiY3JlYXRlZEJ5IjoiNjhmYzc1MmVlMWY4OGZjYWE4MTQ3Nzg5IiwidGVuYW50SWQiOiI2OGZjNzUyZWUxZjg4ZmNhYTgxNDc3OGIiLCJfaWQiOiI2OGZjNzY5MmUxZjg4ZmNhYTgxNDc3OTciLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjEzNzU4OTAsImV4cCI6NDkxNDk3NTg5MH0.UZJBymZTcElS04FjlYGViaPj9XQsBQx3jomp4GARHoo"
      // case "/":
      //   return "pk_live_d7f2ea49651f2949a7e50c9fc5a76ac52947a8e6cace1c4d.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3RhZ2luZyIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJob3Jpem9uZXhwLWdpdC1kZXYtbWFoYWRpcy1wcm9qZWN0cy1kZTMwNmExMy52ZXJjZWwuYXBwIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0xMi0xNlQxNzoxNzo0MS43MTVaIiwiY3JlYXRlZEJ5IjoiNjhmYzc1MmVlMWY4OGZjYWE4MTQ3Nzg5IiwidGVuYW50SWQiOiI2OGZjNzUyZWUxZjg4ZmNhYTgxNDc3OGIiLCJfaWQiOiI2OTYxMzgzNTgwYTMxZmM1ODRmZWJmMTQiLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3Njc5NzkwNjEsImV4cCI6NDkyMTU3OTA2MX0.S703UUP7hcIpt6iIknqDKS3pEF7ppX8HM2E8UY9gu7A"
      case customDemoRoutes.find(route => normalizedPathname.startsWith(route)):
        return "pk_live_1dc63d24d004e85ed46039d9ce7893b845ae83b514eda3db.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSG9yaXpvbmV4cCIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJob3Jpem9uZXhwLmNvbSIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMTItMjBUMDg6NDM6NTYuMDczWiIsImNyZWF0ZWRCeSI6IjY4ZmM3NTJlZTFmODhmY2FhODE0Nzc4OSIsInRlbmFudElkIjoiNjk2NjAzYWY5NWZmMDZmNTA2ZTkzYjIwIiwiX2lkIjoiNjk2NjA1Y2M4MGEzMWZjNTg0ZmVjMDlkIiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzY4MjkzODM2LCJleHAiOjQ5MjE4OTM4MzZ9.S6-M6ktFZYmHNHbN8kbXzXz4eygMCGsLDyz0m5PM2W8"
      // case customDemoRoutes.find(route => normalizedPathname.startsWith(route)):
      //   return "pk_live_91347005c5e4dc53c402aba4707666c9e07e6f4c49153699.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3RhZ2luZyIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJob3Jpem9uZXhwLWdpdC1kZXYtbWFoYWRpcy1wcm9qZWN0cy1kZTMwNmExMy52ZXJjZWwuYXBwIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0xMi0yMFQxMzowMzowNy4xNzJaIiwiY3JlYXRlZEJ5IjoiNjhmYzc1MmVlMWY4OGZjYWE4MTQ3Nzg5IiwidGVuYW50SWQiOiI2OTY2MDNhZjk1ZmYwNmY1MDZlOTNiMjAiLCJfaWQiOiI2OTY2NDI4YjgwYTMxZmM1ODRmZWMwZTEiLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjgzMDkzODcsImV4cCI6NDkyMTkwOTM4N30.supjAP988iI2DbsHdW1dK_GY1pc5U5AvS7DTKJ0vdfE"
      default:
        return "pk_live_8f5e8df45e4b22b96a8730728d373995207863dabec734f8.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSG9yaXpvbiIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2hvcml6b25leHAuY29tIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0xMC0wMVQwNzowNDo1MC4zMjlaIiwiY3JlYXRlZEJ5IjoiNjhmYzc1MmVlMWY4OGZjYWE4MTQ3Nzg5IiwidGVuYW50SWQiOiI2OGZjNzUyZWUxZjg4ZmNhYTgxNDc3OGIiLCJfaWQiOiI2OGZjNzY5MmUxZjg4ZmNhYTgxNDc3OTciLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjEzNzU4OTAsImV4cCI6NDkxNDk3NTg5MH0.UZJBymZTcElS04FjlYGViaPj9XQsBQx3jomp4GARHoo";
    }
  }, [pathname]);

  const platformId = "https://horizonexp.com";
  return (
    <FlagshipContainer
      licenseKey={licenseKey}
      platformId={platformId}
    >
      {children}
    </FlagshipContainer>
  );
}

export default FlagshipProvider