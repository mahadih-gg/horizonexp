"use client";

import { FlagshipContainer } from "@thinkflagship/horizon-web-shorts";
import { usePathname } from "next/navigation";
import React, { useMemo } from 'react';

const FlagshipProvider = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();

  const licenseKey = useMemo(() => {

    if (pathname === "/demo/afghan-wireless" || pathname === "/demo/afghan-wireless/") {
      return "pk_live_7a5a452a5bc5fac219b8a1700411b159a0fd774aedd7dd08.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWZnaGFuIFdpcmVsZXNzIiwicGxhdGZvcm1UeXBlIjoiV0VCIiwiZG9tYWluIjp7ImRvbWFpbiI6Imh0dHBzOi8vd3d3Lmhvcml6b25leHAuY29tL2RlbW8vYWZnaGFuLXdpcmVsZXNzLyIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMTEtMTBUMTU6Mzk6NDIuNzkwWiIsImNyZWF0ZWRCeSI6IjY4ZmM3NTJlZTFmODhmY2FhODE0Nzc4OSIsInRlbmFudElkIjoiNjkzMWE3NzVkMDMzNGUxZmNhOGE4YmQ2IiwiX2lkIjoiNjkzMWFiM2U5ZjhjYzRkZDNlYzg4Yjc0IiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzY0ODYyNzgyLCJleHAiOjQ5MTg0NjI3ODJ9.9Pa8EAmsAvvC3KSPQDbgFdIX_a2hkOOSPyDQHhnFqAc"
    } else if (pathname === "/demo/mtb" || pathname === "/demo/mtb/") {
      return "pk_live_883ea5f8dc119decf3a3d4ee9e230ab1338f1b6bd359acf6.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTVRCIE5lbyIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2hvcml6b25leHAuY29tL2RlbW8vbXRiLyIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMTEtMTNUMTU6MzY6NTIuNjkzWiIsImNyZWF0ZWRCeSI6IjY4ZmM3NTJlZTFmODhmY2FhODE0Nzc4OSIsInRlbmFudElkIjoiNjkzNTllMDViNjJiZDMyYTZkMmVjOTY0IiwiX2lkIjoiNjkzNTlmMTQ5ZjhjYzRkZDNlYzg4ZGMwIiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzY1MTIxODEyLCJleHAiOjQ5MTg3MjE4MTJ9.KQYQoh7S4wrbwvoO4mkV7xNrY7bWbvMNODoHQd-QROM"
    } else {
      return "pk_live_8f5e8df45e4b22b96a8730728d373995207863dabec734f8.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSG9yaXpvbiIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2hvcml6b25leHAuY29tIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0xMC0wMVQwNzowNDo1MC4zMjlaIiwiY3JlYXRlZEJ5IjoiNjhmYzc1MmVlMWY4OGZjYWE4MTQ3Nzg5IiwidGVuYW50SWQiOiI2OGZjNzUyZWUxZjg4ZmNhYTgxNDc3OGIiLCJfaWQiOiI2OGZjNzY5MmUxZjg4ZmNhYTgxNDc3OTciLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjEzNzU4OTAsImV4cCI6NDkxNDk3NTg5MH0.UZJBymZTcElS04FjlYGViaPj9XQsBQx3jomp4GARHoo"
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