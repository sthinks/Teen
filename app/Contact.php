<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Contact extends Model
{
    protected $fillable = ['fullname', 'subject', 'mail', 'message', 'phone'];

}