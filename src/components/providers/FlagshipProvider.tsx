"use client";

import { FlagshipContainer } from "@thinkflagship/horizon-web-shorts";
import React from 'react';

const FlagshipProvider = ({ children }: { children: React.ReactNode }) => {

  const licenseKey = "pk_live_8f5e8df45e4b22b96a8730728d373995207863dabec734f8.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSG9yaXpvbiIsInBsYXRmb3JtVHlwZSI6IldFQiIsImRvbWFpbiI6eyJkb21haW4iOiJodHRwczovL2hvcml6b25leHAuY29tIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0xMC0wMVQwNzowNDo1MC4zMjlaIiwiY3JlYXRlZEJ5IjoiNjhmYzc1MmVlMWY4OGZjYWE4MTQ3Nzg5IiwidGVuYW50SWQiOiI2OGZjNzUyZWUxZjg4ZmNhYTgxNDc3OGIiLCJfaWQiOiI2OGZjNzY5MmUxZjg4ZmNhYTgxNDc3OTciLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjEzNzU4OTAsImV4cCI6NDkxNDk3NTg5MH0.UZJBymZTcElS04FjlYGViaPj9XQsBQx3jomp4GARHoo";

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