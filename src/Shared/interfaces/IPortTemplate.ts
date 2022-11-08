export interface IPortTemplate<Args = unknown, Callback = unknown, Return = void> {
    (argsOrCallback?: Args | Callback): Return;
    (args: Args, callback: Callback): Return;
}
