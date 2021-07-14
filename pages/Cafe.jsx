import { useCallback, useEffect, useState } from "react";

export const Cafe = ({ CafeList }) => {
  return (
    <>
      <li>{CafeList.name}</li>
      <li>{CafeList.icon}</li>
    </>
  );
};
