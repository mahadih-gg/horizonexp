"use client";

import { FlagshipContainer } from "@thinkflagship/web-shorts";
import React from 'react';

const FlagshipProvider = ({ children }: { children: React.ReactNode }) => {

  const licenseKey = "pk_live_0fbf4d4204cfcd00219f2dd81d459fa8593fc27ab58f02ea.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVtbyBXZWIiLCJwbGF0Zm9ybVR5cGUiOiJXRUIiLCJkb21haW4iOnsiZG9tYWluIjoiaHR0cHM6Ly9kZW1vLmhvcml6b25leHAuY29tIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0wNS0yNlQxMzoxMTo0NC44OTFaIiwiY3JlYXRlZEJ5IjoiNjg1NDA5ODQ0MGJlM2U4ODI2NGY0NTZjIiwidGVuYW50SWQiOiI2ODU0MDk4NDQwYmUzZTg4MjY0ZjQ1NjciLCJfaWQiOiI2ODU0MGM5MGMyNWVkMjllZGQ0ZGU4NDEiLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NTAzMzg3MDQsImV4cCI6NDkwMzkzODcwNH0.HATiUrEpOApzmYIrL_AVW6y52TNIY_yc3z4Qi7-9kWg";

  const platformId = "https://demo.horizonexp.com/";
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