import {useEffect} from 'react';
import {useQuery} from 'react-query';

interface Organization {
  providerId: number;
  providerDomainName: string;
}

interface User {
  aliasName: string;
  providerType: number;
  userName: string;
  userGUID: string;
  ccn: number;
  token: string;
  capability: number;
  smtpAddress: string;
}

interface LoginResponse {
  forcePasswordChange: boolean;
  isAccountLocked: boolean;
  loginAttempts: number;
  ownerOrganization: Organization;
  providerOrganization: Organization;
  user: User;
  error?: string;
  isLoading: boolean;
}

const login = async (): Promise<LoginResponse> => {
  try {
    const res = await fetch(
      'https://run.mocky.io/v3/1453b034-c540-43f6-92a0-a44c4ce766e2',
    );
    const json = await res.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const useFetchUser = () => {
  const {data, error, isLoading} = useQuery('loginInfomarion', login);
  console.log(data);

  useEffect(() => {
    //dispatch action requires
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [data, error, isLoading]);

  return () => {};
};
