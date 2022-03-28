export class BaseError extends Error {
    public override toString(): string {
        return this.message;
    }
}
