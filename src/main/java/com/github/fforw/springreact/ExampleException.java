package com.github.fforw.springreact;

public class ExampleException
    extends RuntimeException
{
    private static final long serialVersionUID = 4580565673509579214L;


    public ExampleException(String message)
    {
        super(message);
    }


    public ExampleException(String message, Throwable cause)
    {
        super(message, cause);
    }


    public ExampleException(Throwable cause)
    {
        super(cause);
    }


    public ExampleException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace)
    {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
