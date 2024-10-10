export interface MailData<T = never> {
  to: string;
  data: T;
  firstName: string | null;
}
