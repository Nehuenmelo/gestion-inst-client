export class Payment{
  constructor(
  public amount: Number,
  public payDate: Date,
	public monthPayed: Date,
	public type: String,
	public comment: string
  ){}
}