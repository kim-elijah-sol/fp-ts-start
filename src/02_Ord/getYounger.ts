import { byAge } from "./byAge";
import { min } from "./min";

/**
 * min 함수와 byAge 인스턴스를 조합하여 더 어린 User 를 반환하는 getYounger 함수입니다.
 */
export const getYounger = min(byAge);
